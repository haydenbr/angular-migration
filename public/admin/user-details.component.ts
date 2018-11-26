class UserDetailsController {
	user: any;
	allUsers: any[];

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
	controller: UserDetailsController
});
