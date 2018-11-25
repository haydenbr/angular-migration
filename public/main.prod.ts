import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../prod/public/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then((platformRef) => {
	const upgrade = platformRef.injector.get(UpgradeModule);
	upgrade.bootstrap(document.documentElement, ['app']);
});
