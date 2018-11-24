import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PIPES } from './pipes';

const modules = [CommonModule, ReactiveFormsModule];

@NgModule({
	imports: [modules],
	exports: [modules, PIPES],
	declarations: [PIPES],
	providers: [],
})
export class SharedModule {}
