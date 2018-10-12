angular
	.module('app')
	.factory('unreviewedSessionCount', (sessions, currentIdentity) => ({
		value: 0,

		updateUnreviewedSessionCount: function() {
			sessions
				.getUnreviewedCount(currentIdentity.currentUser.id)
				.then((response) => this.value = response.data.count);
		},
	}));
