angular
	.module('app')
	.filter('talkDuration', () => (duration) =>
		'Duration: ' + duration + ' minutes'
	);
