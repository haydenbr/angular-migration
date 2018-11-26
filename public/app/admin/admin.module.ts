import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { AdminRoutingModule } from './admin.routing.module';
import { COMPONENTS } from './components';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, AdminRoutingModule],
	exports: [],
	declarations: [COMPONENTS],
	providers: [SERVICES]
})
export class AdminModule { }
