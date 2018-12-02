import * as angular from 'angular';

let app = angular.module('app', ['ngRoute', 'toastr']);

app.run(appRun);

appRun.$inject = ['$rootScope', '$location']

function appRun($rootScope, $location) {
	$rootScope.$on('$routeChangeError', (e, next, prev, err) => {
		if (err === 'AUTH_REQUIRED') {
			$location.path('/login');
		}
		if (err === 'NOT_AUTHORIZED') {
			$location.path('/home');
		}
	});
}
