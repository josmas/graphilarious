'use strict';

/**
 * @ngdoc function
 * @name graphilariousApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the graphilariousApp
 */
angular.module('graphilariousApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
