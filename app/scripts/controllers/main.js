'use strict';

/**
 * @ngdoc function
 * @name experimentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the experimentsApp
 */
angular.module('experimentsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
