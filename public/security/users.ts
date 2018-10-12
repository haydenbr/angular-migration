angular.module('app').factory('users', ($http) => ({
	createNewUser: (newUser) => $http.post('/api/users', newUser),

	getAllUsers: () => $http.get('/api/users').then((response) => response.data),
}));
