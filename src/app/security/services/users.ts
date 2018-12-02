import * as angular from 'angular';

export class UserService {
	static $inject = ['$http'];
	constructor(private $http) {}

	createNewUser(newUser) {
		return this.$http.post('http://localhost:8801/api/users', newUser);
	}

	getAllUsers() {
		return this.$http.get('http://localhost:8801/api/users').then((response) => response.data);
	}
}

angular.module('app').service('users', UserService);
