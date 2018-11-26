import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { SecurityRoutingModule } from './security.routing.module';
import { COMPONENTS } from './components';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, SecurityRoutingModule],
	exports: [],
	declarations: [COMPONENTS],
	providers: [SERVICES],
	entryComponents: [COMPONENTS]
})
export class SecurityModule { }
