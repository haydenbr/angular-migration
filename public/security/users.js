angular.module('app').factory('users', function ($http) { return ({
    createNewUser: function (newUser) { return $http.post('/api/users', newUser); },
    getAllUsers: function () { return $http.get('/api/users').then(function (response) { return response.data; }); },
}); });
//# sourceMappingURL=users.js.map