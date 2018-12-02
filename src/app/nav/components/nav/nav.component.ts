import * as angular from 'angular';

export class NavComponent {
	currentUser: any;

	static $inject = ['currentIdentity', 'sessions', 'unreviewedSessionCount'];
	constructor (
		private currentIdentity,
		private sessions,
		private unreviewedSessionCount
	) {}

	$onInit() {
		this.currentUser = this.currentIdentity.currentUser;
		this.unreviewedSessionCount.updateUnreviewedSessionCount();
	}
}


angular.module('app').component('nav', {
	templateUrl: './nav.component.html',
	bindings: {},
	controller: NavComponent
});
