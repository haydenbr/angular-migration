import * as angular from 'angular';

export class CurrentIdentity {
	currentUser;

	static $inject = ['$http'];
	constructor(private $http) {}

	setUser(user) {
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
			.put('http://localhost:8801/api/users/' + this.currentUser.id, newUserObj, { withCredentials: true })
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
