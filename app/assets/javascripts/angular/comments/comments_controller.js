(function () {
  'use strict';

  angular.module('app.comments').controller('CommentsController', CommentsController);

  function CommentsController($scope, commentService) {
    var vmc = this;
    var commentResource = commentService.resourceForUser($scope.currentUserService.getCurrentUser());

    vmc.comments = commentResource.query();

    vmc.rangeDescriptor = 'all';

    vmc.new = function () {
      var now = new Date();
      vmc.newComment = {
        'start_time': now
      }
    };

    vmc.newCancel = function () {
      vmc.newComment = null;
    };

    vmc.create = function (task) {
      var comment = commentResource.save(vmc.newComment);
      vmc.comments.push(comment);
      vmc.newComment = null;
      $("#commentModal").modal('toggle');
      $(".modal-backdrop.in").hide();
    };

    vmc.destroy = function (comment) {
      commentResource.delete(comment);
      vmc.comments.splice(vmc.comments.indexOf(comment), 1);
    }
  }

})();
