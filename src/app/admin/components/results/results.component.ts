import * as angular from 'angular';

angular.module('app').component('results', {
	templateUrl: './results.component.html',
	bindings: {
		allSessions: '<'
	},
	controller: function() {
		this.allSessions.sort((session1, session2) => {
			return session2.voteCount - session1.voteCount;
		});
	},
});
