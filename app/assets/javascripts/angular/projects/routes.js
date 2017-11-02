(function () {
  'use strict';

  angular.module('app.projects').config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('projects');

    $stateProvider.state('projects', {
      url: '/projects',
      templateUrl: 'angular/projects/_projects.html',
      resolve: {
        auth: ["$q", "currentUserService", function ($q, currentUserService) {

          var currentUser = currentUserService.getCurrentUser();

          if (currentUser) {
            return $q.when(currentUser);
          } else {
            return $q.reject({ authenticated: false });
          }
        }]
      }
    })
  }

})();
