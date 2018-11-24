import { Component, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { downgradeComponent } from "@angular/upgrade/static";

declare var angular: angular.IAngularStatic;

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html'
})
export class ProfileComponent {
	profileFormGroup: FormGroup;
	currentIdentity: { currentUser: { firstName: string, lastName: string } };

	// private $location: angular.ILocationService, private toastr, private currentIdentity
	constructor(
		fb: FormBuilder,
		@Inject('$location') private $location: any
	) {
		this.currentIdentity = { currentUser: { firstName: 'Bob', lastName: 'Bobberson' } };
		this.profileFormGroup = fb.group({
			firstName: [this.currentUser.firstName, Validators.required],
			lastName: [this.currentUser.lastName, Validators.required]
		});
	}

	get currentUser() {
		return this.currentIdentity.currentUser;
	}

	save() {
		// currentIdentity.updateUser(this.profile);
		// toastr.success('Profile Saved!');
	}

	cancel() {
		this.$location.path('/home');
	}
}

angular.module('app').directive('profile', downgradeComponent({ component: ProfileComponent }));
