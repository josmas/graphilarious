'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('graphilariousApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  //TODO (jos) I have nothing to test here so far.
  // it('should test for something soon...', function () {
  // });
});
