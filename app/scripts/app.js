'use strict';

// Routing
angular
    .module('experimentsApp', ['ngRoute', 'todo'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl',
                controllerAs: 'todo'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
