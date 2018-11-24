class SessionService {
	constructor(private $http: angular.IHttpService) {}

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
