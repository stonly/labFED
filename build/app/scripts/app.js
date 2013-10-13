'use strict';

angular.module('tadoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        title: 'ToDa',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('tadoApp').run(['$location', '$rootScope', '$http', '$route', function($location, $rootScope, $http, $route) {
    $rootScope.$on('$routeChangeSuccess', function(event, routeData){
      $rootScope.title = $route.current.title;
    });
}]);