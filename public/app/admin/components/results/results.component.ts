import { Component, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'results',
	templateUrl: 'results.component.html'
})
export class ResultsComponent implements OnInit {
	allSessions: any[];

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.take(1).subscribe((data) => {
			this.allSessions = data.sessions;
			this.allSessions.sort((session1, session2) => session2.voteCount - session1.voteCount);
		});
	}
}
