import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class CurrentIdentityService {
	currentUser: any;

	constructor(private http: Http) {}

	setUser(user: any) {
		this.currentUser = user;
	}

	clearUser() {
		this.currentUser = undefined;
	}

	authenticated() {
		return !!this.currentUser;
	}

	updateUser(newUserObj) {
		return this.http
			.put('/api/users/' + this.currentUser.id, newUserObj)
			.do(() => {
				this.currentUser.firstName = newUserObj.firstName;
				this.currentUser.lastName = newUserObj.lastName;
			})
			.catch(() => {
				throw 'Error Logging Out';
			});
	}
}
