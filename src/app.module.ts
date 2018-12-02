import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
	selector: 'app-root',
	template: '<ng-view></ng-view>'
})
export class AppComponent {}

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
