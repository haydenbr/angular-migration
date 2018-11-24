class SessionService {
	constructor(private $http: angular.IHttpService) {}

	getUnreviewedCount(userId) {
		return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
	}
}

angular.module('app').service('sessions', SessionService);
