'use strict';

angular.module('tadoApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.title = "ToDa";
    $scope.tasks = []; //or Array();
    $scope.appendTask = function(){
   		/* This function is triggered when the form is
   		submitted. Its going to get the value of 'newTask' 
   		and append it to 'tasks'. */
        $scope.tasks.push($scope.newTask);
        $scope.newTask = '';
    };
    $scope.newTask = '';
  });
