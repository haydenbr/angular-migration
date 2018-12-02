import * as angular from 'angular';

export class ProfileComponent {
	profile: any;

	static $inject = ['$location', 'toastr', 'currentIdentity'];
	constructor(private $location, private toastr, private currentIdentity) {}

	$onInit() {
		this.profile = angular.copy(this.currentIdentity.currentUser);
	}

	save() {
		this.currentIdentity.updateUser(this.profile);
		this.toastr.success('Profile Saved!');
	}

	cancel() {
		this.$location.path('/home');
	}
}

angular.module('app').component('profile', {
	templateUrl: './profile.component.html',
	bindings: {},
  controller: ProfileComponent
});
