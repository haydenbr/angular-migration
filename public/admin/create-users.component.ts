angular.module('app').component('createUsers', {
	templateUrl: '/admin/create-users.component.html',
	bindings: {},
	controller: function(parseNames, users, toastr) {
		this.import = function() {
			let people = parseNames(this.namesblob);
			people.forEach(
				function(person) {
					users
						.createNewUser({
							email: person.email,
							password: 'pass',
							firstName: person.firstName,
							lastName: person.lastName,
						})
						.catch(
							function(error) {
								toastr.error('User already exists: ' + person.email);
							}.bind(this)
						);
				}.bind(this)
			);

			toastr.success('Users Created!');
		};
	},
});
