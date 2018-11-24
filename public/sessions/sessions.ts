class SessionService {
	constructor(private $http: angular.IHttpService) {}

	incrementVote(sessionId) {
		return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/', {});
	}

	getUnreviewedCount(userId) {
		return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
	}
}

angular.module('app').service('sessions', SessionService);
