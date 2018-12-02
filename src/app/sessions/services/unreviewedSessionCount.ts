import * as angular from 'angular';

export class UnreviewedSessionCount {
	value = 0;

	static $inject = ['sessions', 'currentIdentity'];
	constructor(private sessions, private currentIdentity) {}

	updateUnreviewedSessionCount() {
		return this.sessions
			.getUnreviewedCount(this.currentIdentity.currentUser.id)
			.then((response) => this.value = response.data.count);
	}
}

angular
	.module('app')
	.service('unreviewedSessionCount', UnreviewedSessionCount);
