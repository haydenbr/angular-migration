class AuthService {
	constructor(private $http: any, private currentIdentity: any) {}

	login(credentials) {
		return this.$http
			.post('/api/login', credentials)
			.then((response) => this.currentIdentity.setUser(response.data.user))
			.catch(() => {
				throw 'Invalid Credentials';
			});
	}
	logout() {
		return this.$http
			.post('/api/logout')
			.then(() => this.currentIdentity.clearUser())
			.catch(() => {
				throw 'Error Logging Out';
			});
	}

	waitForAuth() {
		return this.$http.get('/api/currentIdentity').then((response) => {
			if (!!response.data) {
				this.currentIdentity.setUser(response.data);
			}
			return this.currentIdentity;
		});
	}

	requireLogin() {
		return this.waitForAuth().then(
			() => this.currentIdentity.authenticated() || Promise.reject('AUTH_REQUIRED')
		);
	}

	requireAdmin() {
		return this.waitForAuth().then(
			() =>
				(this.currentIdentity.authenticated() &&
					this.currentIdentity.currentUser.isAdmin) ||
				Promise.reject('AUTH_REQUIRED')
		);
	}
}

angular.module('app').service('auth', AuthService);
