import * as angular from 'angular';

export class SessionDetailWithVotesComponent {
	session: any;
	initialCollapsed: any;
}

angular.module('app').component('sessionDetailWithVotes', {
	templateUrl: './session-detail-with-votes.component.html',
	bindings: {
		session: '=',
		initialCollapsed: '@',
	},
	controller: SessionDetailWithVotesComponent
});
