class SessionService {
	constructor(private $http: angular.IHttpService) {}

	getAllSessions() {
		return this.$http.get('/api/sessions').then((response) => response.data);
	}

	createNewSession(newSession) {
		return this.$http.post('/api/sessions', newSession);
	}

	getNextUnreviewedSession(userId) {
		return this.$http.get('/api/users/' + userId + '/randomUnreviewedSession');
	}

	addReviewedSession(userId, sessionId) {
		return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {});
	}

	incrementVote(sessionId) {
		return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/', {});
	}

	getUnreviewedCount(userId) {
		return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
	}
}

angular.module('app').service('sessions', SessionService);
