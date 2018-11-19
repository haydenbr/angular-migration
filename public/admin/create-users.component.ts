class CreateUsersComponent {
	namesblob: string;

	constructor(private parseNames, private users, private toastr) {}

	import() {
		let people = this.parseNames(this.namesblob);

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
	templateUrl: '/admin/create-users.component.html',
	bindings: {},
	controller: CreateUsersComponent
});
