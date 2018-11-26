import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { SessionService } from './session.service';

@Injectable()
export class AllSessionsResolver implements Resolve<any> {
	constructor(private sessionService: SessionService) {}

	resolve() {
		return this.sessionService.getAllSessions();
	}
}
