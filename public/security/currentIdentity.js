var CurrentIdentity = (function () {
    function CurrentIdentity($http) {
        this.$http = $http;
    }
    CurrentIdentity.prototype.setUser = function (user) {
        this.currentUser = user;
    };
    CurrentIdentity.prototype.clearUser = function () {
        this.currentUser = undefined;
    };
    CurrentIdentity.prototype.authenticated = function () {
        return !!this.currentUser;
    };
    CurrentIdentity.prototype.updateUser = function (newUserObj) {
        var _this = this;
        return this.$http
            .put('/api/users/' + this.currentUser.id, newUserObj)
            .then(function () {
            _this.currentUser.firstName = newUserObj.firstName;
            _this.currentUser.lastName = newUserObj.lastName;
        })
            .catch(function () {
            throw 'Error Logging Out';
        });
    };
    return CurrentIdentity;
}());
angular.module('app').service('currentIdentity', CurrentIdentity);
//# sourceMappingURL=currentIdentity.js.map