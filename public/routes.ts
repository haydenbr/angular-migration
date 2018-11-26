import { SessionService } from './app/session/services';
import { AuthService } from './app/security/services';

declare var angular: angular.IAngularStatic;

angular.module('app').config($routeProvider => {
	let routeResolvers = {
		loggedIn: auth => auth.requireLogin(),
		waitForAuth: auth => auth.waitForAuth(),
		requireAdmin: (auth_downgraded: AuthService) => auth_downgraded.requireAdmin().toPromise().then((result) => result ? Promise.resolve(result) : Promise.reject('NOT_AUTHORIZED')),
		userSessions: (sessions_downgrade: SessionService, currentIdentity, auth) =>
			auth
				.requireLogin()
				.then(() => sessions_downgrade.getSessionsByUser(currentIdentity.currentUser.id)),
		allSessions: (sessions_downgrade: SessionService, auth) =>
			auth.requireLogin().then(() => sessions_downgrade.getAllSessions()),
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
		.when('/', { redirectTo: '/home' })
});
