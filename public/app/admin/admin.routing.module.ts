import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSessionsResolver } from '../session/services';
import { ResultsComponent } from './components';
import { AdminGuard } from './services';

		// .when('/admin/results', {
		// 	template: '<results [all-sessions]="$resolve.allSessions"></results>',
		// 	resolve: {
		// 		admin: routeResolvers.requireAdmin,
		// 		allSessions: routeResolvers.allSessions,
		// 	},
		// })

const routes: Routes = [
	{ path: 'admin/results', component: ResultsComponent, resolve: { sessions: AllSessionsResolver }, canActivate: [AdminGuard] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class AdminRoutingModule { }
