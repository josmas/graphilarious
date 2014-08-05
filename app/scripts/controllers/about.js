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
    $scope.aboutText = 'Graphilarious is an experiment with output taken from a Graphs DB and ' +
        'the JavaScript visualisation library D3';
    $scope.aboutMeText = 'You can find me at http://github.com/josmas'; //TODO (jos) make this a link
  });
