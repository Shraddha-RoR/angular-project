(function () {
  'use strict';

  angular.module('app.comments').config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('comments', {
      url: '/projects/:projects_id/tasks/:tasks_id/comments',
      templateUrl: 'angular/comments/_comments.html',
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
