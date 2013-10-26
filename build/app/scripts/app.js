'use strict';

angular.module('tadoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        title: 'ToDa',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/sign-in', {
        title: 'Sign In',
        templateUrl: 'views/sign-in.html',
        controller: 'SignInCtrl'
      })
      .otherwise({
        redirectTo: '/sign-in'
      });
  });

angular.module('tadoApp').run(['$location', '$rootScope', '$http', '$route','User', 'Creator', function($location, $rootScope, $http, $route, User, Creator) {
    $rootScope.$on('$routeChangeSuccess', function(event, routeData){
      $rootScope.title = $route.current.title;

      $rootScope.user = User;
      $rootScope.creator = Creator;
      console.log(Creator)
    });
}]);