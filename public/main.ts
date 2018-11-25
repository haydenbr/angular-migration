import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApp } from './bootstrap';

platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => bootstrapApp(platformRef));
