angular.module('app').config($routeProvider => {
	let routeResolvers = {
		loggedIn: auth => auth.requireLogin(),
		waitForAuth: auth => auth.waitForAuth(),
		requireAdmin: auth => auth.requireAdmin(),
		userSessions: (sessions, currentIdentity, auth) =>
			auth
				.requireLogin()
				.then(() => sessions.getSessionsByUser(currentIdentity.currentUser.id)),
		allSessions: (sessions, auth) =>
			auth.requireLogin().then(() => sessions.getAllSessions()),
		allUsers: (users, auth) =>
			auth.requireLogin().then(() => users.getAllUsers()),
	};

	$routeProvider
		.when('/admin/login', {
			template: '<admin-login></admin-login>',
			resolve: {
				currentAuth: routeResolvers.waitForAuth,
			},
		})
		.when('/admin/results', {
			template: '<results all-sessions="$resolve.allSessions"></results>',
			resolve: {
				admin: routeResolvers.requireAdmin,
				allSessions: routeResolvers.allSessions,
			},
		})
		.when('/admin/users/:id', {
			template: '<user-details all-users="$resolve.allUsers"></user-details>',
			resolve: {
				admin: routeResolvers.requireAdmin,
				allUsers: routeResolvers.allUsers,
			},
		})
		.when('/users', {
			template: '<user-list all-users="$resolve.allUsers"></user-list>',
			resolve: {
				admin: routeResolvers.requireAdmin,
				allUsers: routeResolvers.allUsers,
			},
		})
		.when('/admin/createusers', {
			template: '<create-users></create-users>',
			resolve: {
				admin: routeResolvers.requireAdmin,
			},
		})
		.when('/home', {
			template: '<home user-sessions="$resolve.userSessions"></home>',
			resolve: {
				login: routeResolvers.loggedIn,
				userSessions: routeResolvers.userSessions,
			},
		})
		.when('/profile', {
			template: '<profile></profile>',
			resolve: {
				userProfile: routeResolvers.loggedIn,
			},
		})
		.when('/createsession', {
			template:
				'<create-new-session user-sessions="$resolve.userSessions"></create-new-session>',
			resolve: {
				userSessions: routeResolvers.userSessions,
			},
		})
		.when('/login', {
			template: '<login></login>',
			resolve: {
				currentAuth: routeResolvers.waitForAuth,
			},
		})
		.when('/logout', {
			template: '<logout></logout>',
		})
		.otherwise('/home');
});
