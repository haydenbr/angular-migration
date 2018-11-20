import * as angular from 'angular';

angular.module('app').factory('sessions', ($http, $q) => ({
	getSessionsByUser: (userId) =>
		$http.get('http://localhost:8801/api/sessions/user/' + userId).then((response) => response.data),

	getAllSessions: () =>
		$http.get('http://localhost:8801/api/sessions').then((response) => response.data),

	createNewSession: (newSession) => $http.post('http://localhost:8801/api/sessions', newSession),

	getNextUnreviewedSession: (userId) =>
		$http.get('http://localhost:8801/api/users/' + userId + '/randomUnreviewedSession'),

	addReviewedSession: (userId, sessionId) =>
		$http.post('http://localhost:8801/api/users/' + userId + '/reviewSession/' + sessionId),

	incrementVote: (sessionId) =>
		$http.put('http://localhost:8801/api/sessions/' + sessionId + '/incrementVote/'),

	getUnreviewedCount: (userId) =>
		$http.get('http://localhost:8801/api/users/' + userId + '/unreviewedSessionCount'),
}));
