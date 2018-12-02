import { NgModule, Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
	selector: 'app-root',
	template: '<div class="ng-view"></div>'
})
export class AppComponent {}

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
