angular.module('app').component('results', {
	templateUrl: '/admin/results.component.html',
	bindings: {
		allSessions: '<'
	},
	controller: function() {
		this.allSessions.sort(function(session1, session2) {
			return session2.voteCount - session1.voteCount;
		});
	},
});
