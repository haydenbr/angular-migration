import { Component, Input } from '@angular/core';

@Component({
	selector: 'session-detail-with-votes',
	templateUrl: 'session-detail-with-votes.component.html'
})
export class SessionDetailWithVotesComponent {
	@Input() session: any;
}
