import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { AdminModule } from './admin';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpModule,
		UpgradeModule,
		AdminModule
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule {}
