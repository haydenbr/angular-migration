import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components';
import { WaitForAuthResolver } from './services';

const routes: Routes = [
	{ path: 'login', component: LoginComponent, resolve: { waitForAuth: WaitForAuthResolver } }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class SecurityRoutingModule { }
