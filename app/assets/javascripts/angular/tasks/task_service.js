(function () {
  'use strict';

  angular.module('app.tasks').factory('taskService', taskService);

  function taskService($resource) {

    var resourceForUser = function (user) {
      return $resource('/api/users/:user_id/projects/:projects_id/tasks/:id.json', { id: '@id', user_id: user.user_id, projects_id: window.location.href.split("/")[5] }, {
        update: {
          method: 'PATCH'
        }});
    };

    return {
      resourceForUser: resourceForUser
    }
  }

})();
