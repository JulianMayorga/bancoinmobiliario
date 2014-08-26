'use strict';

angular.module('main', ['ui.router'])
.config(function ($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl',
		data: {
			title: 'Main'
		}
	});
});
