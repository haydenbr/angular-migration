angular.module('app').factory('sessions', function ($http, $q) { return ({
    getSessionsByUser: function (userId) {
        return $http.get('/api/sessions/user/' + userId).then(function (response) { return response.data; });
    },
    getAllSessions: function () {
        return $http.get('/api/sessions').then(function (response) { return response.data; });
    },
    createNewSession: function (newSession) { return $http.post('/api/sessions', newSession); },
    getNextUnreviewedSession: function (userId) {
        return $http.get('/api/users/' + userId + '/randomUnreviewedSession');
    },
    addReviewedSession: function (userId, sessionId) {
        return $http.post('/api/users/' + userId + '/reviewSession/' + sessionId);
    },
    incrementVote: function (sessionId) {
        return $http.put('/api/sessions/' + sessionId + '/incrementVote/');
    },
    getUnreviewedCount: function (userId) {
        return $http.get('/api/users/' + userId + '/unreviewedSessionCount');
    },
}); });
//# sourceMappingURL=sessions.js.map