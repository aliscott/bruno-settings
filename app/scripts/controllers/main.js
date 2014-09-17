'use strict';

/**
 * @ngdoc function
 * @name brunoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brunoApp
 */
angular.module('brunoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
