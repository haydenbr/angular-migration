import * as angular from 'angular';

angular.module('app').factory('currentIdentity', function($http) {
	return {
		currentUser: null,
		setUser: function(user) {
			this.currentUser = user;
		},
		clearUser: function() {
			this.currentUser = null;
		},
		authenticated: function() {
			return !!this.currentUser;
		},
		updateUser: function(newUserObj) {
			return $http
				.put('http://localhost:8801/api/users/' + this.currentUser.id, newUserObj, { withCredentials: true })
				.then(() => {
					this.currentUser.firstName = newUserObj.firstName;
					this.currentUser.lastName = newUserObj.lastName;
				})
				.catch(() => {
					throw 'Error Logging Out';
				});
		},
	};
});
