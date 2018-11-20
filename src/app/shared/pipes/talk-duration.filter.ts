import * as angular from 'angular';

angular
	.module('app')
	.filter('talkDuration', () => (duration) =>
		'Duration: ' + duration + ' minutes'
	);
