import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

export const bootstrapApp = ({ injector }: { injector: Injector }) => injector.get(UpgradeModule).bootstrap(document.documentElement, ['app']);
