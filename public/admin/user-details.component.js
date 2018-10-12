angular.module('app').component('userDetails', {
    templateUrl: '/admin/user-details.component.html',
    bindings: {
        allUsers: '<'
    },
    controller: function ($routeParams) {
        this.user = this.allUsers.find(function (user) { return user.id === parseInt($routeParams.id); });
    },
});
//# sourceMappingURL=user-details.component.js.map