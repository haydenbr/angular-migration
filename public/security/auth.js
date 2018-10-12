angular.module('app').factory('auth', function ($http, currentIdentity) { return ({
    login: function (credentials) {
        return $http
            .post('/api/login', credentials)
            .then(function (response) { return currentIdentity.setUser(response.data.user); })
            .catch(function () {
            throw 'Invalid Credentials';
        });
    },
    logout: function () {
        return $http
            .post('/api/logout')
            .then(function () { return currentIdentity.clearUser(); })
            .catch(function () {
            throw 'Error Logging Out';
        });
    },
    waitForAuth: function () {
        return $http.get('/api/currentIdentity').then(function (response) {
            if (!!response.data) {
                currentIdentity.setUser(response.data);
            }
            return currentIdentity;
        });
    },
    requireLogin: function () {
        return this.waitForAuth().then(function () { return currentIdentity.authenticated() || Promise.reject('AUTH_REQUIRED'); });
    },
    requireAdmin: function () {
        return this.waitForAuth().then(function () {
            return (currentIdentity.authenticated() &&
                currentIdentity.currentUser.isAdmin) ||
                Promise.reject('AUTH_REQUIRED');
        });
    },
}); });
//# sourceMappingURL=auth.js.map