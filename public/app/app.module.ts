import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { AdminModule } from './admin';
import { HomeModule } from './home';
import { ProfileModule } from './profile';
import { SharedModule } from './shared';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpModule,
		UpgradeModule,
		SharedModule,
		AdminModule,
		HomeModule,
		ProfileModule
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule {}
