var SessionService = (function () {
    function SessionService($http) {
        this.$http = $http;
    }
    SessionService.prototype.getSessionsByUser = function (userId) {
        return this.$http.get('/api/sessions/user/' + userId).then(function (response) { return response.data; });
    };
    SessionService.prototype.getAllSessions = function () {
        return this.$http.get('/api/sessions').then(function (response) { return response.data; });
    };
    SessionService.prototype.createNewSession = function (newSession) {
        return this.$http.post('/api/sessions', newSession);
    };
    SessionService.prototype.getNextUnreviewedSession = function (userId) {
        return this.$http.get('/api/users/' + userId + '/randomUnreviewedSession');
    };
    SessionService.prototype.addReviewedSession = function (userId, sessionId) {
        return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {});
    };
    SessionService.prototype.incrementVote = function (sessionId) {
        return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/', {});
    };
    SessionService.prototype.getUnreviewedCount = function (userId) {
        return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
    };
    return SessionService;
}());
angular.module('app').service('sessions', SessionService);
//# sourceMappingURL=sessions.js.map