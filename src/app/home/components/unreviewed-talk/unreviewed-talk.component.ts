import * as angular from 'angular';

angular.module('app').component('unreviewedTalk', {
	templateUrl: './unreviewed-talk.component.html',
	bindings: {
		session: '=',
		voteYes: '&',
		voteNo: '&',
	},
	controller: function() {
		this.yes = function() {
			this.voteYes();
		};

		this.no = function() {
			this.voteNo();
		};
	},
});
