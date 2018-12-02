import * as angular from 'angular';

angular.module('app').component('userDetails', {
	templateUrl: './user-details.component.html',
	bindings: {
		allUsers: '<'
	},
	controller: function($routeParams) {
		this.user = this.allUsers && this.allUsers.find((user) => user.id === parseInt($routeParams.id));
	},
});
