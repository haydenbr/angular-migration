class CreateNewSessionComponent {
	title: string;
	length: string;
	abstract: string;
	userSessions: any[];

	constructor(private currentIdentity, private sessions) {}

	create() {
		let newUserSession = {
			title: this.title,
			length: parseInt(this.length),
			abstract: this.abstract,
			userFirstName: this.currentIdentity.currentUser.firstName,
			userLastName: this.currentIdentity.currentUser.lastName,
			userId: this.currentIdentity.currentUser.id,
		};

		this.sessions.createNewSession(newUserSession).then((response) => {
				console.log(response);
				this.userSessions.push(response.data);
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
