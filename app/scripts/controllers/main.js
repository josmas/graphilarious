'use strict';

/**
 * @ngdoc function
 * @name graphilariousApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphilariousApp
 */
angular.module('graphilariousApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  var d3Sample = function (){

    d3.select('#d3-container')
      .append('svg')
      .attr('width', 50)
      .attr('height', 50)
      .append('circle')
      .attr('cx', 25)
      .attr('cy', 25)
      .attr('r', 25)
      .style('fill', 'purple');
  };

  d3Sample();
});
