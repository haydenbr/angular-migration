import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [],
	providers: [SERVICES],
})
export class CoreModule { }
