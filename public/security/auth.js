var AuthService = (function () {
    function AuthService($http, currentIdentity) {
        this.$http = $http;
        this.currentIdentity = currentIdentity;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return this.$http
            .post('/api/login', credentials)
            .then(function (response) { return _this.currentIdentity.setUser(response.data.user); })
            .catch(function () {
            throw 'Invalid Credentials';
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.$http
            .post('/api/logout')
            .then(function () { return _this.currentIdentity.clearUser(); })
            .catch(function () {
            throw 'Error Logging Out';
        });
    };
    AuthService.prototype.waitForAuth = function () {
        var _this = this;
        return this.$http.get('/api/currentIdentity').then(function (response) {
            if (!!response.data) {
                _this.currentIdentity.setUser(response.data);
            }
            return _this.currentIdentity;
        });
    };
    AuthService.prototype.requireLogin = function () {
        var _this = this;
        return this.waitForAuth().then(function () { return _this.currentIdentity.authenticated() || Promise.reject('AUTH_REQUIRED'); });
    };
    AuthService.prototype.requireAdmin = function () {
        var _this = this;
        return this.waitForAuth().then(function () {
            return (_this.currentIdentity.authenticated() &&
                _this.currentIdentity.currentUser.isAdmin) ||
                Promise.reject('AUTH_REQUIRED');
        });
    };
    return AuthService;
}());
angular.module('app').service('auth', AuthService);
//# sourceMappingURL=auth.js.map