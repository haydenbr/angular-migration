import * as angular from 'angular';

angular.module('app').factory('users', ($http) => ({
	createNewUser: (newUser) => $http.post('http://localhost:8801/api/users', newUser),

	getAllUsers: () => $http.get('http://localhost:8801/api/users').then((response) => response.data),
}));
