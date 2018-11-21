var UnreviewedSessionsService = (function () {
    function UnreviewedSessionsService(sessions, currentIdentity) {
        this.sessions = sessions;
        this.currentIdentity = currentIdentity;
        this.value = 0;
    }
    UnreviewedSessionsService.prototype.updateUnreviewedSessionCount = function () {
        var _this = this;
        return this.sessions
            .getUnreviewedCount(this.currentIdentity.currentUser.id)
            .then(function (response) { return _this.value = response.data.count; });
    };
    return UnreviewedSessionsService;
}());
angular
    .module('app')
    .service('unreviewedSessionCount', UnreviewedSessionsService);
//# sourceMappingURL=unreviewedSessionCount.js.map