import * as angular from 'angular';

export class SessionService {
	static $inject = ['$http'];
	constructor (private $http: angular.IHttpService, $q) {}

	getSessionsByUser(userId) {
		return this.$http.get('http://localhost:8801/api/sessions/user/' + userId, { withCredentials: true }).then((response) => response.data);
	}

	getAllSessions() {
		return this.$http.get('http://localhost:8801/api/sessions', { withCredentials: true }).then((response) => response.data);
	}

	createNewSession(newSession) {
		return this.$http.post('http://localhost:8801/api/sessions', newSession, { withCredentials: true });
	}

	getNextUnreviewedSession(userId) {
		return this.$http.get('http://localhost:8801/api/users/' + userId + '/randomUnreviewedSession', { withCredentials: true });
	}

	addReviewedSession(userId, sessionId) {
		return this.$http.post('http://localhost:8801/api/users/' + userId + '/reviewSession/' + sessionId, {}, { withCredentials: true })
	}

	incrementVote(sessionId) {
		return this.$http.put('http://localhost:8801/api/sessions/' + sessionId + '/incrementVote/', {}, { withCredentials: true })
	}

	getUnreviewedCount(userId) {
		return this.$http.get('http://localhost:8801/api/users/' + userId + '/unreviewedSessionCount', { withCredentials: true });
	}
}

angular.module('app').service('sessions', SessionService);
