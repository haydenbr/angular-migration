import { NameParserService } from '../app/admin/providers';

declare var angular: angular.IAngularStatic;

class CreateUsersComponent {
	namesblob: string;

	constructor(private nameParser: NameParserService, private users, private toastr) {}

	import() {
		let people = this.nameParser.parseNames(this.namesblob);

		people.forEach((person) =>
			this.users
				.createNewUser({
					email: person.email,
					password: 'pass',
					firstName: person.firstName,
					lastName: person.lastName,
				})
				.catch(() => {
					this.toastr.error('User already exists: ' + person.email);
				}));

		this.toastr.success('Users Created!');
	}
}

angular.module('app').component('createUsers', {
	templateUrl: './create-users.component.html',
	bindings: {},
	controller: CreateUsersComponent
});
