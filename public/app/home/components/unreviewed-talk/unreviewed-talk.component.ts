import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
	selector: 'unreviewed-talk',
	templateUrl: 'unreviewed-talk.component.html'
})
export class UnreviewedTalkComponent {
	@Input() session: any;
	@Output() voteYes = new Subject();
	@Output() voteNo = new Subject();

	onYesClick() {
		this.voteYes.next();
	}

	onNoClick() {
		this.voteNo.next();
	}
}
