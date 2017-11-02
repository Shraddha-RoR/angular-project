(function () {
  'use strict';

  angular.module('app.comments').factory('commentService', commentService);

  function commentService($resource) {

    var resourceForUser = function (user) {
      return $resource('/api/users/:user_id/projects/:projects_id/tasks/:tasks_id/comments/:id.json', { id: '@id', user_id: user.user_id, projects_id: 2, tasks_id: window.location.href.split("/")[7] }, {
        update: {
          method: 'PATCH'
        }});
    };

    return {
      resourceForUser: resourceForUser
    }
  }

})();
