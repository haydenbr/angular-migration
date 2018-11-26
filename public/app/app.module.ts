import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AdminModule } from './admin';
import { CoreModule } from './core';
import { HomeModule } from './home';
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
		SecurityModule,
		SessionModule,
		RouterModule.forChild([
			{ path: '**', redirectTo: '/admin/results', pathMatch: 'full' }
		])
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
