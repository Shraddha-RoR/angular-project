(function () {
  'use strict';

  angular.module('app.tasks').controller('TaskFormController', TaskFormController);

  function TaskFormController($scope) {
    $scope.closeDropdown = function () {
      $scope.dropdownOpen = false;
    }
  }

})();
