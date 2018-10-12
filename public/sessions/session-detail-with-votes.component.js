angular.module('app').directive('sessionDetailWithVotes', {
	templateUrl: '/sessions/session-detail-with-votes.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: function() {},
});
