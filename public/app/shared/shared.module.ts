import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { PIPES } from './pipes';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];

@NgModule({
	imports: [modules],
	exports: [modules, PIPES, COMPONENTS],
	declarations: [PIPES, COMPONENTS],
	providers: [],
	entryComponents: [ENTRY_COMPONENTS]
})
export class SharedModule {}
