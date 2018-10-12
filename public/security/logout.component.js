angular.module('app').component('logout', {
    bindings: {},
    controller: function ($location, auth) {
        auth.logout();
        $location.path('/login');
    },
});
//# sourceMappingURL=logout.component.js.map