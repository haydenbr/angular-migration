import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

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

angular.module('app').factory('nameParser', downgradeInjectable(NameParserService));
