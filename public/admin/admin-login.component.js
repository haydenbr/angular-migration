angular.module('app').component('adminLogin', {
    templateUrl: '/admin/admin-login.component.html',
    bindings: {},
    controller: function ($location, currentIdentity, auth, toastr) {
        this.loggedIn = currentIdentity.authenticated();
        if (this.loggedIn) {
            $location.path('/home');
        }
        this.login = function () {
            auth
                .login({
                username: this.email,
                password: this.password
            })
                .then(function () {
                $location.path('/home');
            }, function (err) {
                toastr.error(err);
            });
        };
    }
});
//# sourceMappingURL=admin-login.component.js.map