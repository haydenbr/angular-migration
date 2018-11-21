import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone.js';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => {
	const upgrade = platformRef.injector.get(UpgradeModule);
	upgrade.bootstrap(document.documentElement, ['app']);
	console.log('bootstrapped hybrid app!!!');
});
