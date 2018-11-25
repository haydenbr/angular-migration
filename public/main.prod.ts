import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../prod/public/app/app.module.ngfactory';
import { bootstrapApp } from './bootstrap';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then((platformRef) => bootstrapApp(platformRef));
