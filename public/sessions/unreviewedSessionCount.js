angular
    .module('app')
    .factory('unreviewedSessionCount', function (sessions, currentIdentity) { return ({
    value: 0,
    updateUnreviewedSessionCount: function () {
        var _this = this;
        sessions
            .getUnreviewedCount(currentIdentity.currentUser.id)
            .then(function (response) { return _this.value = response.data.count; });
    },
}); });
//# sourceMappingURL=unreviewedSessionCount.js.map