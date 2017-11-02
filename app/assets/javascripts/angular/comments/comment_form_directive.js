(function () {
  'use strict';

  angular.module('app.comments').directive('commentForm', commentForm);

  function commentForm() {
    return {
      restrict: 'E',
      controller: 'CommentFormController',
      scope: {
        comment: '=comment'
      },
      templateUrl: 'angular/comments/_form.html'
    }
  }

})();
