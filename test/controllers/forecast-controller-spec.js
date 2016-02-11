describe('forecastController', function() {
var $scope,
    $rootScope,
    $location,
    controller,
    $routeParams;

beforeEach(module('weatherApp'));

beforeEach(inject(function (_$controller_, _$location_, _$routeParams_) {
        $controller = _$controller_;
        $location = _$location_;
        $routeParams = _$routeParams_;
    }));

    beforeEach(inject(function ($rootScope) {
      $scope = $rootScope.$new();

      controller = $controller("forecastController", {$scope: $scope});
    }));

  it('instantiate days to 2', function() {
      expect($scope.days).toEqual($routeParams.days || 2);
  });

  it('should have a method to check if the path is active', function() {
      $location.path('/forecast');
      expect($location.path()).toBe('/forecast');
  });

});
