import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [COMPONENTS],
	providers: [SERVICES],
	entryComponents: [ENTRY_COMPONENTS]
})
export class AdminModule { }
