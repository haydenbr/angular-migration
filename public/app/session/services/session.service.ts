import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SessionService {

	constructor(private http: Http) { }

	getSessionsByUser(userId) {
		return this.$http.get('/api/sessions/user/' + userId).then((response) => response.data);
	}
}
