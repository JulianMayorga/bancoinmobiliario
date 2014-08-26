'use strict';

angular.module('inmobiliaria', ['ngResource', 'ui.router', 'admin'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl',
		data: {
			title: 'Main'
		}
	});

	$urlRouterProvider.otherwise('/');
})
.controller('AppController', function ($scope) {
	$scope.$on('$stateChangeSuccess', function (event, toState) {
		console.log(toState.data.title);
		if (angular.isDefined(toState.data.title)) {
			$scope.pageTitle = toState.data.title;
		}
	});
});
