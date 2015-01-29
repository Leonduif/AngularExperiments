'use strict';

/**
 * @ngdoc function
 * @name experimentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the experimentsApp
 */
angular.module('experimentsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
