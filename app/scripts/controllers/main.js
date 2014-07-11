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

    var svgContainer = d3.select('#d3-container')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    var node1 = svgContainer.append('circle')
      .style('stroke', 'gray')
      .style('fill', 'purple')
      .attr('r', 40)
      .attr('cx', 50)
      .attr('cy', 50);

    var node2 = svgContainer.append('circle')
      .style('stroke', 'gray')
      .style('fill', 'white')
      .attr('r', 40)
      .attr('cx', 250)
      .attr('cy', 250)
      .on('mouseover', function(){d3.select(this).style('fill', 'aliceblue');})
      .on('mouseout', function(){d3.select(this).style('fill', 'white');});

    var line1To2 = svgContainer.append('line')
      .style('stroke', 'black')
      .style('stroke-width', '4px')
      .style('fill', 'black')
      .attr('x1', 50)
      .attr('y1', 50)
      .attr('x2', 250)
      .attr('y2', 250)
      .on('click', function(){console.log('handle clicking on Edges.. coming soon!');});
  };

  d3Sample();
});
