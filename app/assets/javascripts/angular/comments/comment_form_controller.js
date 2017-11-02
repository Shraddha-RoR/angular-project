(function () {
  'use strict';

  angular.module('app.comments').controller('CommentFormController', CommentFormController);

  function CommentFormController($scope) {
    $scope.closeDropdown = function () {
      $scope.dropdownOpen = false;
    }
  }

})();
