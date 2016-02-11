
//Services

weatherApp.service('weatherService', ['$resource', function($resource) {
//get current weather data
var currentWeatherAPI = $resource('http://api.openweathermap.org/data/2.5/weather');

this.getLocalWeather = function(lat, lon) {

return currentWeatherAPI.get({lat: lat, lon:lon, units:'imperial', APPID: '61e9d774c59373067878d38e14dd8947'});

}

//get forecast data
this.getWeather = function(city, days ) {
var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");

return  weatherAPI.get({ q: city, units: 'imperial', APPID: '61e9d774c59373067878d38e14dd8947', cnt: days });
}
}]);
