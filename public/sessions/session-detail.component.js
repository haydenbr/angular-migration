angular.module('app').component('sessionDetail', {
	templateUrl: '/sessions/session-detail.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: function() {},
});
