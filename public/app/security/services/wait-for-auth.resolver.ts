import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class WaitForAuthResolver implements Resolve<any> {
	constructor(private authService: AuthService) {}

	resolve() {
		return this.authService.waitForAuth();
	}
}
