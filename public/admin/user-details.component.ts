class UserDetailsController {
	user: any;
	allUsers: any[];

	constructor(private $routeParams) {
		this.user = this.allUsers.find((user) => user.id === parseInt(this.$routeParams.id));
	}

	$onInit() {
		console.log('hey man', this.allUsers);
	}
}

angular.module('app').component('userDetails', {
	templateUrl: './user-details.component.html',
	bindings: {
		allUsers: '<'
	},
	controller: UserDetailsController
});
