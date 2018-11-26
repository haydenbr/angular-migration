import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AdminModule } from './admin';
import { CoreModule } from './core';
import { HomeModule } from './home';
import { ProfileModule } from './profile';
import { SecurityModule } from './security';
import { SharedModule } from './shared';
import { SessionModule } from './session';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpModule,
		UpgradeModule,
		SharedModule,
		CoreModule,
		AppRoutingModule,
		AdminModule,
		HomeModule,
		ProfileModule,
		SecurityModule,
		SessionModule
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule {}
