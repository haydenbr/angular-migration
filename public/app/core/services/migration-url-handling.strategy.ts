import { Provider } from '@angular/core';
import { UrlHandlingStrategy, UrlTree } from "@angular/router";

export class MigrationUrlHandlingStrategy implements UrlHandlingStrategy {
	// return true if angular2 router should handle the route
	shouldProcessUrl(url: UrlTree): boolean {
		return url.toString().startsWith('/admin/results');
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
