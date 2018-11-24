import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { COMPONENTS } from './components';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [COMPONENTS],
	providers: [SERVICES],
})
export class SessionModule { }
