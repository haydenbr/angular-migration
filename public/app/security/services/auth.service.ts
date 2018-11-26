import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

import { CurrentIdentityService } from './current-identity.service';

declare var angular: angular.IAngularStatic;

@Injectable()
export class AuthService {

	constructor(
		private currentIdentity: CurrentIdentityService,
		private http: Http
	) {}

	requireAdmin() {
		return this.waitForAuth().map(() =>
			!!(this.currentIdentity.authenticated() && this.currentIdentity.currentUser.isAdmin)
		);
	}

	waitForAuth() {
		return this.http.get('/api/currentIdentity')
		.map((response) => {
			let user = response.json();
			if (!!user) {
				this.currentIdentity.setUser(user);
			}
			return this.currentIdentity;
		});
	}

	login(credentials) {
		return this.http
			.post('/api/login', credentials)
			.do((response) => this.currentIdentity.setUser(response.json().user))
			.catch(() => {
				throw 'Invalid Credentials';
			});
	}
}

angular.module('app').service('auth_downgraded', downgradeInjectable(AuthService));
