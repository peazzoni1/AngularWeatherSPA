//Controllers

//Homepage
weatherApp.controller('homeController', ['$scope', '$location', '$localStorage', 'weatherService', function ($scope, $location, $localStorage, weatherService) {
    $localStorage.$reset();
    $scope.$storage = $localStorage; //local storage to save search result

    $scope.city = $scope.$storage.citySaved;

    $scope.$watch('city', function () { //watch for city or zip, update storage
        $scope.$storage.citySaved = $scope.city;
    });

    //controller globals
    $scope.localWeather = " ";
    $scope.lat = "0";
    $scope.lon = "0";

    //get weather data from weatherService baseed on location
    $scope.getWeather = function (position) {
        $scope.lat = position.coords.latitude;
        $scope.lon = position.coords.longitude;
        weatherService.getLocalWeather($scope.lat, $scope.lon).$promise.then(function(data) {
          $scope.localWeather = data;
        });
    }
    //get users current position and pass it to getWeather()
    $scope.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition($scope.getWeather);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    $scope.getLocation();

    //redirect to forecast page on submit
    $scope.submit = function () {
        $location.path('/forecast');
    }
    //rount temperature to integer
    $scope.roundTemp = function (temp) {
        return Math.round(temp);
    }
}]);

//Forecast Page

weatherApp.controller('forecastController', ['$scope', '$routeParams', '$localStorage', 'weatherService', function ($scope, $routeParams, $localStorage, weatherService) {
    $scope.$storage = $localStorage;
    $scope.city = $scope.$storage.citySaved;

    //store number of forecast days from buttons in forecast view
    $scope.days = $routeParams.days || 2;

    //store result from forecast api call in services.js
    $scope.weatherResult = weatherService.getWeather($scope.$storage.citySaved, $scope.days);

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

    $scope.roundTemp = function (temp) {
        return Math.round(temp);
    }
  }]);
