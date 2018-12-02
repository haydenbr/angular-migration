import * as angular from 'angular';

export class LogoutComponent {
	static $inject = ['$location', 'auth'];
	constructor(private $location, private auth) {}

	$onInit() {
		this.auth.logout();
		this.$location.path('/login');
	}
}

angular.module('app').component('logout', {
	bindings: {},
	controller: LogoutComponent
});
