import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { COMPONENTS } from './components';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [COMPONENTS],
	providers: [],
	entryComponents: [COMPONENTS]
})
export class ProfileModule {}
