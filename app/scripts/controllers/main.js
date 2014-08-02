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

  //TODO (jos) all the d3 code here has to be relocated somewhere else.
  var d3Sample = function (){

    var data = [ {'x': 50, 'y': 50, name: 'Node1', color: 'purple'},
                 {'x': 250, 'y': 250, name: 'Node2', color: 'red'}
               ];

    var svgContainer = d3.select('#d3-container')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    var circle = svgContainer.selectAll('circle')
      .data(data);
    circle.exit().remove();
    circle.enter().append('circle')
      .style('stroke', 'gray')
      .style('fill', function(d){ return d.color; })
      .attr('r', 40);
    circle
      .attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; })
      .on('click', function(d) { console.log('Clicked: ' + d.name); });

    //Creating a line - hardcoded values for now.
    svgContainer.append('line')
      .style('stroke', 'black')
      .style('stroke-width', '4px')
      .style('fill', 'black')
      .attr('x1', 50)
      .attr('y1', 50)
      .attr('x2', 250)
      .attr('y2', 250)
      .on('click', function(){ console.log('handle clicking on Edges.. coming soon!'); });
  };

  d3Sample();
});
