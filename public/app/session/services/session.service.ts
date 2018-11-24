import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Injectable()
export class SessionService {

	constructor(private http: Http) { }

	getSessionsByUser(userId) {
		return this.http.get('/api/sessions/user/' + userId).map((response) => response.json()).toPromise();
	}

	getAllSessions() {
		return this.http.get('/api/sessions').map((response) => response.json()).toPromise();
	}

	createNewSession(newSession) {
		return this.http.post('/api/sessions', newSession).map((response) => response.json()).toPromise();
	}
}

angular.module('app').service('sessions_v2', downgradeInjectable(SessionService));
