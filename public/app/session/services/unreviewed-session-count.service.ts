import { Injectable } from '@angular/core';

import { CurrentIdentityService } from '../../security/services';
import { SessionService } from './session.service';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Injectable()
export class UnreviewedSessinCountService {
	value = 0;

	constructor(private sessionService: SessionService, private currentIdentity: CurrentIdentityService) { }

	updateUnreviewedSessionCount() {
		return this.sessionService
			.getUnreviewedCount(this.currentIdentity.currentUser.id)
			.then((response) => this.value = response.count);
	}
}

angular.module('app').service('unreviewedSessionCount', downgradeInjectable(UnreviewedSessinCountService));
