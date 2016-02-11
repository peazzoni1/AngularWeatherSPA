describe('homeController', function() {
var $scope,
    $rootScope,
    $location,
    controller;

beforeEach(module('weatherApp'));

beforeEach(inject(function (_$controller_, _$location_) {
        $controller = _$controller_;
        $location = _$location_;
    }));

    beforeEach(inject(function ($rootScope) {
      $scope = $rootScope.$new();

      controller = $controller("homeController", {$scope: $scope});
    }));

  it('should have a method to check if the path is active', function() {
      $location.path('/');
      expect($location.path()).toBe('/');
  });

  it('should instantiate lat, lon to 0', function() {
  expect($scope.lat).toEqual('0');
  expect($scope.lon).toEqual('0');
  });

});
