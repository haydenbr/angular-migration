import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

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

	getNextUnreviewedSession(userId) {
		return this.http.get('/api/users/' + userId + '/randomUnreviewedSession')
			.map((response) => response.json())
			.catch(() => Promise.resolve(undefined))
			.toPromise();
	}

	addReviewedSession(userId, sessionId) {
		return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {}).toPromise();
	}

	incrementVote(sessionId) {
		return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', {}).toPromise();
	}

	getUnreviewedCount(userId) {
		return this.http.get('/api/users/' + userId + '/unreviewedSessionCount').map((response) => response.json()).toPromise();
	}
}
