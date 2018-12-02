import * as angular from 'angular';

angular.module('app').factory('sessions', ($http: angular.IHttpService, $q) => ({
	getSessionsByUser: (userId) =>
		$http.get('http://localhost:8801/api/sessions/user/' + userId, { withCredentials: true }).then((response) => response.data),

	getAllSessions: () =>
		$http.get('http://localhost:8801/api/sessions', { withCredentials: true }).then((response) => response.data),

	createNewSession: (newSession) => $http.post('http://localhost:8801/api/sessions', newSession, { withCredentials: true }),

	getNextUnreviewedSession: (userId) =>
		$http.get('http://localhost:8801/api/users/' + userId + '/randomUnreviewedSession', { withCredentials: true }),

	addReviewedSession: (userId, sessionId) =>
		$http.post('http://localhost:8801/api/users/' + userId + '/reviewSession/' + sessionId, {}, { withCredentials: true }),

	incrementVote: (sessionId) =>
		$http.put('http://localhost:8801/api/sessions/' + sessionId + '/incrementVote/', {}, { withCredentials: true }),

	getUnreviewedCount: (userId) =>
		$http.get('http://localhost:8801/api/users/' + userId + '/unreviewedSessionCount', { withCredentials: true }),
}));
