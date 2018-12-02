import * as angular from 'angular';

class UserListComponent {
	private allUsers: any[];

	$onInit() {
		this.allUsers = this.allUsers.concat().sort((user1, user2) => {
			if (user1.firstName < user2.firstName) return -1;
			if (user1.firstName === user2.firstName) return 0;
			if (user1.firstName > user2.firstName) return 1;
		});
	}
}

angular.module('app').component('userList', {
	templateUrl: './user-list.component.html',
	bindings: {
		allUsers: '<'
	},
	controller: UserListComponent
});
