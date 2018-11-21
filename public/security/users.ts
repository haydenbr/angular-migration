class UserService {
	constructor(private $http: angular.IHttpService) {}

	createNewUser(newUser) {
		return this.$http.post('/api/users', newUser)
	}

	getAllUsers() {
		return this.$http.get('/api/users').then((response) => response.data);
	}
}

angular.module('app').service('users', UserService);
