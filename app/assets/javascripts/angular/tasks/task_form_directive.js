(function () {
  'use strict';

  angular.module('app.tasks').directive('taskForm', taskForm);

  function taskForm() {
    return {
      restrict: 'E',
      controller: 'TaskFormController',
      scope: {
        task: '=task'
      },
      templateUrl: 'angular/tasks/_form.html'
    }
  }

})();
