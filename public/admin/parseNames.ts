class NameParserService {
	parseNames(blobInput: string) {
		let lines = blobInput.split(/\r?\n/);

		return lines.map((line) => {
			let pieces = line.split('|');
			return {
				email: pieces[0],
				firstName: pieces[1],
				lastName: pieces[2],
			};
		});
	}
}

angular.module('app').service('nameParser', NameParserService);
