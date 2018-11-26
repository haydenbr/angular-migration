import { Provider } from '@angular/core';
import { UrlHandlingStrategy, UrlTree } from "@angular/router";

const urlWhiteList = [
	'/admin/results',
	'/login'
];

export class MigrationUrlHandlingStrategy implements UrlHandlingStrategy {
	// return true if angular2 router should handle the route
	shouldProcessUrl(url: UrlTree): boolean {
		return urlWhiteList.reduce((shouldProcess, nextUrl) => shouldProcess || url.toString().startsWith(nextUrl), false);
	}

	extract(url: UrlTree) {
		return url;
	}

	merge(newUrlPart: UrlTree) {
		return newUrlPart;
	}
}

export const MigrationUrlHandlingStrategyProvider: Provider = {
	provide: UrlHandlingStrategy,
	useClass: MigrationUrlHandlingStrategy
};
