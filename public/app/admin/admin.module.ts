import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { PROVIDERS } from './providers';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [],
	providers: [PROVIDERS],
})
export class AdminModule { }
