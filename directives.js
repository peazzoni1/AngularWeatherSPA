//Directive shows current weather temp / conditions on homepage

weatherApp.directive('currentWeather', function ($compile) {
        return {
            restrict: "E",
            replace: true,
            controller: 'homeController',
            scope: {
              weather: '=',
              sunrise: '=',
              sunset: '=',
            },
            templateUrl: 'Pages/currentWeather.html',
            link: function (scope, elements, attrs, controller) {

            //variables for weather condition classes
            var weatherCond = scope.weather;
            var weatherDescription = angular.element('<h1>' + '{{localWeather.weather[0].description}}' + '</h1>');
            var cloudyDay = angular.element('<p class="condition"><i class="wi wi-day-cloudy"></i>' + " " + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');
            var rainyDay = angular.element('<p class="condition"><i class="wi wi-day-rain"></i>' + " " + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');
            var thunderStorms = angular.element('<p class="condition"><i class="wi wi-day-thunderstorm"></i>' + " " + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');
            var snowDay = angular.element('<p class="condition"><i id ="icon"class="wi wi-day-snow"></i>' + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');
            var sunnyDay = angular.element('<p class="condition"><i class="wi wi-day-sunny"></i>' + " " + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');
            var evening = angular.element('<p class="condition"><i class="wi wi-stars"></i>' + " " + '{{roundTemp(localWeather.main.temp)}}' + '&deg</p>');

            //append and compile elements based on current weather data code
            if (weatherCond >= 801 && weatherCond <= 804) {
                elements.append(cloudDay);
                elements.append(weatherDescription);
                $compile(cloudyDay)(scope);
                $compile(weatherDescription)(scope);
            } else if (weatherCond >= 300 && weatherCond <= 501) {
                elements.append(rainyDay);
                elements.append(weatherDescription);
                $compile(rainyDay)(scope);
                $compile(weatherDescription)(scope);

            } else if (weatherCond >= 200 && weatherCond <= 232) {
                elements.append(thunderStorms);
                elements.append(weatherDescription);
                $compile(thunderStorms)(scope);
                $compile(weatherDescription)(scope);

            } else if (weatherCond >= 600 && weatherCond <= 622) {
                elements.append(snowDay);
                elements.append(weatherDescription);
                $compile(snowDay)(scope);
                $compile(weatherDescription)(scope);

            } else if (weatherCond == 800) {
                elements.append(sunnyDay);
                elements.append(weatherDescription);
                $compile(sunnyDay)(scope);
                $compile(weatherDescription)(scope);

            } else {
                elements.append(sunnyDay);
                elements.append(weatherDescription);
                $compile(sunnyDay)(scope);
                $compile(weatherDescription)(scope);
            }
            // get timestamp
            var ts = (Math.floor(Date.now() / 1000));

            //now change the background for day or evening
            //if daytime:
            if (ts >= scope.sunrise && ts < scope.sunset) {
                var dayBackground = angular.element('<body>').css({
                    "background": "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/341173/caroline_sada_landscape_small.jpg)",
                    "background-size": "cover"
                });
                $compile(dayBackground)(scope);
            }
            //if evening:
            else if (ts >= scope.sunset || ts < scope.sunrise) {
                    var nightBackground = angular.element('<body>').css({
                        "background": "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/341173/sky-sunset-night-space.jpeg)",
                        "background-size": "cover"
                    });
                    $compile(nightBackground)(scope);

                    elements.append(evening);
                    $compile(evening)(scope);

                    var changeFontColor = angular.element('i').css("color", "white");
                    $compile(changeFontColor)(scope);
                }
        }
      }
    });
