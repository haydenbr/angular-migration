// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

import * as angular from 'angular';
import './angularjs-imports';

import * as jquery from 'jquery/dist/jquery.min.js';
import * as angularRoute from 'angular-route/angular-route.min.js';

const keep = [jquery, angularRoute];

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
