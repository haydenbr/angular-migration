import { Component, OnInit, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Component({
	selector: 'results',
	templateUrl: 'results.component.html'
})
export class ResultsComponent implements OnInit {
	@Input() allSessions: any[];

	constructor() { }

	ngOnInit() {
		this.allSessions.sort((session1, session2) => session2.voteCount - session1.voteCount);
	}
}

angular.module('app').directive('results', downgradeComponent({ component: ResultsComponent }))
