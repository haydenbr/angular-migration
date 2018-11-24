import { SessionService } from '../app/session/services';

declare var angular: angular.IAngularStatic;

class UnreviewedSessionsService {
	value = 0;

	constructor(private sessions_v2: SessionService, private currentIdentity) {}

	updateUnreviewedSessionCount() {
		return this.sessions_v2
			.getUnreviewedCount(this.currentIdentity.currentUser.id)
			.then((response) => this.value = response.count);
	}
}

angular
	.module('app')
	.service('unreviewedSessionCount', UnreviewedSessionsService);
