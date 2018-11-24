import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';

const modules = [CommonModule, ReactiveFormsModule];

@NgModule({
	imports: [modules],
	exports: [modules, PIPES, COMPONENTS],
	declarations: [PIPES, COMPONENTS],
	providers: [],
})
export class SharedModule {}
