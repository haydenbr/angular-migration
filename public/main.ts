import { UpgradeModule, downgradeInjectable } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare var angular: angular.IAngularStatic;

import { AppModule } from './app/app.module';
import { NameParserService } from './app/admin/providers';

platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => {
	angular.module('app').factory('nameParser', downgradeInjectable(NameParserService));

	const upgrade = platformRef.injector.get(UpgradeModule);
	upgrade.bootstrap(document.documentElement, ['app']);
});
