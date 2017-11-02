angular.module('app',
  [
    'ui.bootstrap',
    'ui.router',
    'templates',
    'ngMessages',

    'app.projects',
    'app.tasks',

    'app.login',
    'app.report',
    'app.users',
    'app.comments'
  ]);

angular.module('app.projects', [
  'ui.bootstrap.datetimepicker',
  'ngResource'
]);

angular.module('app.comments', [
  'ui.bootstrap.datetimepicker',
  'ngResource'
]);

angular.module('app.tasks', [
  'ui.bootstrap.datetimepicker',
  'ngResource'
]);


angular.module('app.login', []);
angular.module('app.users', []);
angular.module('app.report', []);