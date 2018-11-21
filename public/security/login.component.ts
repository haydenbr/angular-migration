class LoginCtrl {
	public email: string;

	constructor(private $location, private currentIdentity, private auth, private toastr) {}

	$onInit() {
		if (this.currentIdentity.authenticated()) {
			this.$location.path('/home');
		}
	}

	login() {
		this.auth
			.login({
				username: this.email,
				password: 'pass',
			})
			.then(() => this.$location.path('/home'))
			.catch((err) => this.toastr.error(err));
	};
}

angular.module('app').component('login', {
	templateUrl: './login.component.html',
	bindings: {},
	controller: LoginCtrl
});
