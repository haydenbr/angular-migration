class CurrentIdentity {
	currentUser: any;

	constructor(private $http: angular.IHttpService) {}

	setUser(user: any) {
		this.currentUser = user;
	}

	clearUser() {
		this.currentUser = undefined;
	}

	authenticated() {
		return !!this.currentUser;
	}

	updateUser(newUserObj) {
		return this.$http
			.put('/api/users/' + this.currentUser.id, newUserObj)
			.then(() => {
				this.currentUser.firstName = newUserObj.firstName;
				this.currentUser.lastName = newUserObj.lastName;
			})
			.catch(() => {
				throw 'Error Logging Out';
			});
	}
}

angular.module('app').service('currentIdentity', CurrentIdentity);
