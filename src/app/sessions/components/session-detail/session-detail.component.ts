import * as angular from 'angular';

export class SessionDetailComponent {
	session: any;
	initialCollapsed: any;
}

angular.module('app').component('sessionDetail', {
	templateUrl: './session-detail.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: SessionDetailComponent
});
