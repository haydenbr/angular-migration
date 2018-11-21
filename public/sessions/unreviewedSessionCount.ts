class UnreviewedSessionsService {
	value = 0;

	constructor(private sessions, private currentIdentity) {}

	updateUnreviewedSessionCount() {
		return this.sessions
			.getUnreviewedCount(this.currentIdentity.currentUser.id)
			.then((response) => this.value = response.data.count);
	}
}

angular
	.module('app')
	.service('unreviewedSessionCount', UnreviewedSessionsService);
