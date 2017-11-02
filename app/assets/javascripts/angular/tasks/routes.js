(function () {
  'use strict';

  angular.module('app.tasks').config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('tasks', {
      url: '/projects/:project_id/tasks',
      templateUrl: 'angular/tasks/_tasks.html',
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
