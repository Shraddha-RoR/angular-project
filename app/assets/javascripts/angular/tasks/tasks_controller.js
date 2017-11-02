(function () {
  'use strict';

  angular.module('app.tasks').controller('TasksController', TasksController);

  function TasksController($scope, taskService) {
    var vmt = this;

    var taskResource = taskService.resourceForUser($scope.currentUserService.getCurrentUser());

    vmt.tasks = taskResource.query();

    vmt.rangeDescriptor = 'all';

    vmt.new = function () {
      var now = new Date();
      vmt.newTask = {
        'priority' : 0
      }
    };

    vmt.newCancel = function () {
      vmt.newTask = null;

    };

    vmt.create = function () {
      var task = taskResource.save(vmt.newTask);
      vmt.tasks.push(task);
      vmt.newTask = null;
    };

    vmt.edit = function (task) {
      vmt.editedTaskMarker = task;
      vmt.clonedTask = angular.extend({}, task);
    };

    vmt.editCancel = function () {
      vmt.editedTaskMarker = null;
      vmt.clonedTask = null;
    };

    vmt.update = function () {
      taskResource.update(vmt.clonedTask);
      vmt.tasks.splice(vmt.tasks.indexOf(vmt.editedTaskMarker), 1, vmt.clonedTask);
      vmt.editedTaskMarker = null;
      vmt.clonedTask = null;
    };

    vmt.destroy = function (task) {
      taskResource.delete(task);
      vmt.tasks.splice(vmt.tasks.indexOf(task), 1);
    }
  }

})();
