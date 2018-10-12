angular.module('app').component('sessionDetailWithVotes', {
	templateUrl: '/sessions/session-detail-with-votes.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: function() {},
});
