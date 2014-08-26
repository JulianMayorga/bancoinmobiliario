'use strict';

angular.module('inmobiliaria', ['ngResource', 'ui.router', 'main', 'admin'])
.config(function ($urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
})
.controller('AppController', function ($scope) {
	$scope.$on('$stateChangeSuccess', function (event, toState) {
		if (angular.isDefined(toState.data.title)) {
			$scope.pageTitle = toState.data.title;
		}
	});
});
