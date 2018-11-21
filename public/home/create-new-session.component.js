var CreateNewSessionComponent = (function () {
    function CreateNewSessionComponent(currentIdentity, sessions) {
        this.currentIdentity = currentIdentity;
        this.sessions = sessions;
    }
    CreateNewSessionComponent.prototype.create = function () {
        var _this = this;
        var newUserSession = {
            title: this.title,
            length: parseInt(this.length),
            abstract: this.abstract,
            userFirstName: this.currentIdentity.currentUser.firstName,
            userLastName: this.currentIdentity.currentUser.lastName,
            userId: this.currentIdentity.currentUser.id,
        };
        this.sessions.createNewSession(newUserSession).then(function (response) {
            console.log(response);
            _this.userSessions.push(response.data);
        });
    };
    return CreateNewSessionComponent;
}());
angular.module('app').component('createNewSession', {
    templateUrl: '/home/create-new-session.component.html',
    bindings: {
        userSessions: '<',
    },
    controller: CreateNewSessionComponent
});
//# sourceMappingURL=create-new-session.component.js.map