import * as angular from 'angular';

export class UnreviewedTalkComponent {
	voteYes: () => void;
	voteNo: () => void;

	yes() {
		this.voteYes();
	};

	no() {
		this.voteNo();
	};
}

angular.module('app').component('unreviewedTalk', {
	templateUrl: './unreviewed-talk.component.html',
	bindings: {
		session: '=',
		voteYes: '&',
		voteNo: '&',
	},
	controller: UnreviewedTalkComponent
});
