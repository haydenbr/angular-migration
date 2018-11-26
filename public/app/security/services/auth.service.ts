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
}

angular.module('app').service('auth_downgraded', downgradeInjectable(AuthService));
