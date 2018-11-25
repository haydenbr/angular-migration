import { SessionService } from '../app/session/services';

declare var angular: angular.IAngularStatic;

class HomeComponent {
	currentUser: any;
	currentSessionToReview: any;

	constructor(
		private currentIdentity,
		private sessions_downgrade: SessionService,
		private unreviewedSessionCount
	) {}

	$onInit() {
		this.currentUser = this.currentIdentity.currentUser;
		this.setNextSessionToReview();
	}

	setNextSessionToReview() {
		this.sessions_downgrade.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then((response) => this.currentSessionToReview = response);
	}

	voteYes() {
		this.sessions_downgrade
			.incrementVote(this.currentSessionToReview.id)
			.then(() => this.sessions_downgrade.addReviewedSession(
				this.currentUser.id,
				this.currentSessionToReview.id
			))
			.then(() => {
					this.setNextSessionToReview();
					this.unreviewedSessionCount.updateUnreviewedSessionCount();
				});
	};

	voteNo() {
		this.sessions_downgrade
			.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
			.then(() => {
					this.setNextSessionToReview();
					this.unreviewedSessionCount.updateUnreviewedSessionCount();
				});
	};
}

angular.module('app').component('home', {
	templateUrl: './home.component.html',
	bindings: {
		userSessions: '<',
	},
	controller: HomeComponent
});
