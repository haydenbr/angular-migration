import { Component, OnInit } from '@angular/core';

import { CurrentIdentityService } from '../../../security/services';
import { UnreviewedSessinCountService } from '../../../session/services';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
	selector: 'app-nav',
	templateUrl: 'app-nav.component.html'
})
export class AppNavComponent implements OnInit {
	currentUser: any;

	constructor(
		private currentIdentity: CurrentIdentityService,
		private unreviewedSessionCount: UnreviewedSessinCountService
	) {}

	ngOnInit() {
		this.currentUser = this.currentIdentity.currentUser;
	}

	get unreviewedCount() {
		return this.unreviewedSessionCount.value;
	}

	get userFirstName() {
		return this.currentUser.firstName.firstName;
	}

	get userLastName() {
		return this.currentUser.firstName.lastName;
	}
}
