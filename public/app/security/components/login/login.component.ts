import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, CurrentIdentityService } from '../../services';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	emailFormContrl = new FormControl();

	constructor(
		private router: Router,
		private currentIdentity: CurrentIdentityService,
		private auth: AuthService
	) {}

	ngOnInit() {
		if (this.currentIdentity.authenticated()) {
			this.navigateHome();
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
			.subscribe(() => this.navigateHome())
	}

	private navigateHome() {
		return this.router.navigate(['home']);
	}
}
