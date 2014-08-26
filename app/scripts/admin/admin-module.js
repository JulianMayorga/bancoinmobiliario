'use strict';

angular.module('admin', ['ui.router'])
.config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'partials/admin.html',
        data: {
        	title: 'Admin'
        }
      });
  });