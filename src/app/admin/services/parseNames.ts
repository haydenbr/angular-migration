import * as angular from 'angular';

angular.module('app').factory('parseNames', () => (blobInput) => {
	let lines = blobInput.split(/\r?\n/);

	lines.forEach((line, idx) => {
		let pieces = line.split('|');
		lines[idx] = {
			email: pieces[0],
			firstName: pieces[1],
			lastName: pieces[2],
		};
	});

	return lines;
});
