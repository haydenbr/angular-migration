angular.module('app').component('userDetails', {
	templateUrl: '/admin/user-details.component.html',
	bindings: {
		allUsers: '<'
	},
	controller: function($routeParams) {
		this.user = this.allUsers.find((user) => user.id === parseInt($routeParams.id));
	},
});
