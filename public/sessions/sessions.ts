angular.module('app').factory('sessions', ($http, $q) => ({
	getSessionsByUser: (userId) =>
		$http.get('/api/sessions/user/' + userId).then((response) => response.data),

	getAllSessions: () =>
		$http.get('/api/sessions').then((response) => response.data),

	createNewSession: (newSession) => $http.post('/api/sessions', newSession),

	getNextUnreviewedSession: (userId) =>
		$http.get('/api/users/' + userId + '/randomUnreviewedSession'),

	addReviewedSession: (userId, sessionId) =>
		$http.post('/api/users/' + userId + '/reviewSession/' + sessionId),

	incrementVote: (sessionId) =>
		$http.put('/api/sessions/' + sessionId + '/incrementVote/'),

	getUnreviewedCount: (userId) =>
		$http.get('/api/users/' + userId + '/unreviewedSessionCount'),
}));
