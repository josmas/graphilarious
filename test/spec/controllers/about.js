'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('graphilariousApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach about and contact info to the scope', function () {
    expect(scope.aboutText).not.toBe(null);
    expect(scope.aboutMeText).not.toBe(null);
  });
});
