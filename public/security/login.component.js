var LoginCtrl = (function () {
    function LoginCtrl($location, currentIdentity, auth, toastr) {
        this.$location = $location;
        this.currentIdentity = currentIdentity;
        this.auth = auth;
        this.toastr = toastr;
    }
    LoginCtrl.prototype.$onInit = function () {
        if (this.currentIdentity.authenticated()) {
            this.$location.path('/home');
        }
    };
    LoginCtrl.prototype.login = function () {
        var _this = this;
        this.auth
            .login({
            username: this.email,
            password: 'pass',
        })
            .then(function () { return _this.$location.path('/home'); })
            .catch(function (err) { return _this.toastr.error(err); });
    };
    ;
    return LoginCtrl;
}());
angular.module('app').component('login', {
    templateUrl: '/security/login.component.html',
    bindings: {},
    controller: LoginCtrl
});
//# sourceMappingURL=login.component.js.map