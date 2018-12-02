import * as angular from 'angular';

export class AuthService {
	static $inject = ['$http', 'currentIdentity'];
	constructor(private $http, private currentIdentity) {}

	login(credentials) {
		return this.$http
			.post('http://localhost:8801/api/login', credentials, { withCredentials: true })
			.then((response) => this.currentIdentity.setUser(response.data.user))
			.catch(() => {
				throw 'Invalid Credentials';
			})
	}

	logout() {
		return this.$http
			.post('http://localhost:8801/api/logout', {}, { withCredentials: true })
			.then(() => this.currentIdentity.clearUser())
			.catch(() => {
				throw 'Error Logging Out';
			});
	}

	waitForAuth() {
		return this.$http.get('http://localhost:8801/api/currentIdentity', { withCredentials: true }).then((response) => {
			if (!!response.data) {
				this.currentIdentity.setUser(response.data);
			}
			return this.currentIdentity;
		})
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
