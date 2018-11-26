import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { downgradeComponent } from '@angular/upgrade/static';

import { AuthService, CurrentIdentityService } from '../../services';

declare var angular: angular.IAngularStatic;

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	emailFormContrl = new FormControl();

	constructor(
		@Inject('$location') private $location: any,
		private currentIdentity: CurrentIdentityService,
		private auth: AuthService
	) {}

	ngOnInit() {
		if (this.currentIdentity.authenticated()) {
			this.$location.path('/home');
		}
	}

	get email() {
		return this.emailFormContrl.value;
	}

	login() {
		this.auth
			.login({
				username: this.email,
				password: 'pass',
			})
			// .catch((err) => this.toastr.error(err));
			.subscribe(() => this.$location.path('/home'))
	};
}

angular.module('app').directive('login', downgradeComponent({ component: LoginComponent }));
