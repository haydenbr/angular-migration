import * as angular from 'angular';

angular.module('app').component('sessionDetail', {
	templateUrl: './session-detail.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: function() {},
});
