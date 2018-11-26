import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSessionsResolver } from '../session/services';
import { ResultsComponent } from './components';
import { AdminGuard } from './services';

const routes: Routes = [
	{ path: 'admin/results', component: ResultsComponent, resolve: { sessions: AllSessionsResolver }, canActivate: [AdminGuard] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class AdminRoutingModule { }
