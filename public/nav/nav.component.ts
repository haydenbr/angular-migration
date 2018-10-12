angular.module('app').component('nav', {
	templateUrl: '/nav/nav.component.html',
	bindings: {},
	controller: function(currentIdentity, sessions, unreviewedSessionCount) {
		this.currentUser = currentIdentity.currentUser;

		unreviewedSessionCount.updateUnreviewedSessionCount();
		this.unreviewedSessionCount = unreviewedSessionCount;
	},
});
