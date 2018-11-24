import { SessionService } from '../app/session/services';

declare var angular: angular.IAngularStatic;

class HomeComponent {
	currentUser: any;
	currentSessionToReview: any;

	constructor(
		private currentIdentity,
		private sessions,
		private sessions_v2: SessionService,
		private unreviewedSessionCount
	) {}

	$onInit() {
		this.currentUser = this.currentIdentity.currentUser;
		this.setNextSessionToReview();
	}

	setNextSessionToReview() {
		this.sessions_v2.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then((response) => this.currentSessionToReview = response);
	}

	voteYes() {
		this.sessions
			.incrementVote(this.currentSessionToReview.id)
			.then(() => this.sessions.addReviewedSession(
				this.currentUser.id,
				this.currentSessionToReview.id
			))
			.then(() => {
					this.setNextSessionToReview();
					this.unreviewedSessionCount.updateUnreviewedSessionCount();
				});
	};

	voteNo() {
		this.sessions
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
