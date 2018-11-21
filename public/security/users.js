var UserService = (function () {
    function UserService($http) {
        this.$http = $http;
    }
    UserService.prototype.createNewUser = function (newUser) {
        return this.$http.post('/api/users', newUser);
    };
    UserService.prototype.getAllUsers = function () {
        return this.$http.get('/api/users').then(function (response) { return response.data; });
    };
    return UserService;
}());
angular.module('app').service('users', UserService);
//# sourceMappingURL=users.js.map