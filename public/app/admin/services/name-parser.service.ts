import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class NameParserService {
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
