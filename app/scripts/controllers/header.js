'use strict';

/**
 * @ngdoc function
 * @name graphilariousApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller for the Header in the main app page 
 */
angular.module('graphilariousApp')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };

  });
