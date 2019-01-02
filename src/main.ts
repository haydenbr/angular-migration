import * as angular from 'angular';
import './vendor';
import './angularjs-imports';

import { enableProdMode } from '@angular/core';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { AppModule } from './app.module';

setAngularJSGlobal(angular);

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => {
	const upgrade = platformRef.injector.get(UpgradeModule);
	upgrade.bootstrap(document.documentElement, ['app']);
	console.log('bootstrapped hybrid app!!!');
});
