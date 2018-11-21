var HomeComponent = (function () {
    function HomeComponent(currentIdentity, sessions, unreviewedSessionCount) {
        this.currentIdentity = currentIdentity;
        this.sessions = sessions;
        this.unreviewedSessionCount = unreviewedSessionCount;
    }
    HomeComponent.prototype.$onInit = function () {
        this.currentUser = this.currentIdentity.currentUser;
        this.setNextSessionToReview();
    };
    HomeComponent.prototype.setNextSessionToReview = function () {
        var _this = this;
        this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then(function (response) { return _this.currentSessionToReview = response.data; });
    };
    HomeComponent.prototype.voteYes = function () {
        var _this = this;
        this.sessions
            .incrementVote(this.currentSessionToReview.id)
            .then(function () { return _this.sessions.addReviewedSession(_this.currentUser.id, _this.currentSessionToReview.id); })
            .then(function () {
            _this.setNextSessionToReview();
            _this.unreviewedSessionCount.updateUnreviewedSessionCount();
        });
    };
    ;
    HomeComponent.prototype.voteNo = function () {
        var _this = this;
        this.sessions
            .addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
            .then(function () {
            _this.setNextSessionToReview();
            _this.unreviewedSessionCount.updateUnreviewedSessionCount();
        });
    };
    ;
    return HomeComponent;
}());
angular.module('app').component('home', {
    templateUrl: '/home/home.component.html',
    bindings: {
        userSessions: '<',
    },
    controller: HomeComponent
});
//# sourceMappingURL=home.component.js.map