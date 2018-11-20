import * as angular from 'angular';

angular.module('app').component('sessionDetailWithVotes', {
	templateUrl: './session-detail-with-votes.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: function() {},
});
