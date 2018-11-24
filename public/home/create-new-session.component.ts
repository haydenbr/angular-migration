import { SessionService } from '../app/session/services';

declare var angular: angular.IAngularStatic

class CreateNewSessionComponent {
	title: string;
	length: string;
	abstract: string;
	userSessions: any[];

	constructor(private currentIdentity, private sessions_v2: SessionService) {}

	create() {
		let newUserSession = {
			title: this.title,
			length: parseInt(this.length),
			abstract: this.abstract,
			userFirstName: this.currentIdentity.currentUser.firstName,
			userLastName: this.currentIdentity.currentUser.lastName,
			userId: this.currentIdentity.currentUser.id,
		};

		this.sessions_v2.createNewSession(newUserSession).then((response) => {
				console.log(response);
				this.userSessions.push(response);
			}
		);
	}
}

angular.module('app').component('createNewSession', {
	templateUrl: './create-new-session.component.html',
	bindings: {
		userSessions: '<',
	},
	controller: CreateNewSessionComponent
});
