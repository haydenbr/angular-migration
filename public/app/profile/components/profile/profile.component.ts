import { Component, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { downgradeComponent } from "@angular/upgrade/static";

import { ToastrService } from '../../../core/services';

declare var angular: angular.IAngularStatic;

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html'
})
export class ProfileComponent {
	profileFormGroup: FormGroup;

	constructor(
		fb: FormBuilder,
		@Inject('$location') private $location: any,
		@Inject('currentIdentity') private currentIdentity: any,
		@Inject('toastr') private toastr: ToastrService
	) {
		this.profileFormGroup = fb.group({
			firstName: [this.currentUser.firstName, Validators.required],
			lastName: [this.currentUser.lastName, Validators.required]
		});
	}

	get currentUser() {
		return this.currentIdentity.currentUser;
	}

	save() {
		this.currentIdentity.updateUser(this.profileFormGroup.value);
		// this.toastr.success('Profile Saved!');
	}

	cancel() {
		this.$location.path('/home');
	}
}

angular.module('app').directive('profile', downgradeComponent({ component: ProfileComponent }));
