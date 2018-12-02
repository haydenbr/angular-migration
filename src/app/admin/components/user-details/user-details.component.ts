import * as angular from 'angular';

class UserDetailsComponent {
	allUsers: any[];
	user: any;

	static $inject = ['$routeParams'];
	constructor(private $routeParams) {}

	$onInit() {
		this.user = this.allUsers.find((user) => user.id === parseInt(this.$routeParams.id));
	}
}

angular.module('app').component('userDetails', {
	templateUrl: './user-details.component.html',
	bindings: {
		allUsers: '<'
	},
	controller: UserDetailsComponent
});
