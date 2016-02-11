describe('service: weatherService', function () {
  var $httpBackend;
  var $rootScope;

  beforeEach(module('weatherApp'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    weatherService = $injector.get('weatherService');
  }));

  it('should return get request with status of 200', function () {
    $httpBackend.expect('http://api.openweathermap.org/data/2.5/weather').respond(200, 'success');
  });

});
