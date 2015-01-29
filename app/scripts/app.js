'use strict';

/**
 * @ngdoc overview
 * @name experimentsApp
 * @description
 * # experimentsApp
 *
 * Main module of the application.
 */
angular
  .module('experimentsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
