angular.module('app').factory('currentIdentity', function ($http) {
    return {
        currentUser: null,
        setUser: function (user) {
            this.currentUser = user;
        },
        clearUser: function () {
            this.currentUser = null;
        },
        authenticated: function () {
            return !!this.currentUser;
        },
        updateUser: function (newUserObj) {
            var _this = this;
            return $http
                .put('/api/users/' + this.currentUser.id, newUserObj)
                .then(function () {
                _this.currentUser.firstName = newUserObj.firstName;
                _this.currentUser.lastName = newUserObj.lastName;
            })
                .catch(function () {
                throw 'Error Logging Out';
            });
        },
    };
});
//# sourceMappingURL=currentIdentity.js.map