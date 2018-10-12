angular.module('app').factory('auth', ($http, currentIdentity) => ({
	login: (credentials) =>
		$http
			.post('/api/login', credentials)
			.then((response) => currentIdentity.setUser(response.data.user))
			.catch(() => {
				throw 'Invalid Credentials';
			}),
	logout: () =>
		$http
			.post('/api/logout')
			.then(() => currentIdentity.clearUser())
			.catch(() => {
				throw 'Error Logging Out';
			}),

	waitForAuth: () =>
		$http.get('/api/currentIdentity').then((response) => {
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
