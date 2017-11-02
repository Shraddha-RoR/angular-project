(function () {
  'use strict';

  angular.module('app.projects').controller('ProjectFormController', ProjectFormController);

  function ProjectFormController($scope) {
    $scope.closeDropdown = function () {
      $scope.dropdownOpen = false;
    }
  }

})();
