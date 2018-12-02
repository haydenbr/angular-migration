import * as angular from 'angular';

angular.module('app').factory('auth', ($http, currentIdentity) => ({
	login: (credentials) =>
		$http
			.post('http://localhost:8801/api/login', credentials, { withCredentials: true })
			.then((response) => currentIdentity.setUser(response.data.user))
			.catch(() => {
				throw 'Invalid Credentials';
			}),
	logout: () =>
		$http
			.post('http://localhost:8801/api/logout', {}, { withCredentials: true })
			.then(() => currentIdentity.clearUser())
			.catch(() => {
				throw 'Error Logging Out';
			}),

	waitForAuth: () =>
		$http.get('http://localhost:8801/api/currentIdentity', { withCredentials: true }).then((response) => {
			if (!!response.data) {
				currentIdentity.setUser(response.data);
			}
			return currentIdentity;
		}),

	requireLogin: function() {
		return this.waitForAuth().then(
			() => currentIdentity.authenticated() || Promise.reject('AUTH_REQUIRED')
		);
	},

	requireAdmin: function() {
		return this.waitForAuth().then(
			() =>
				(currentIdentity.authenticated() &&
					currentIdentity.currentUser.isAdmin) ||
				Promise.reject('AUTH_REQUIRED')
		);
	},
}));
