import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES } from './pipes';

const modules = [CommonModule];

@NgModule({
	imports: [modules],
	exports: [modules, PIPES],
	declarations: [PIPES],
	providers: [],
})
export class SharedModule {}
