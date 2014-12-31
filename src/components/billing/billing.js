(function () {
  'use strict';

  angular.module('exceptionless.billing', [
    'angularPayments',
    'angular-stripe',
    'ui.bootstrap',

    'dialogs.main',
    'dialogs.default-translations',

    'app.config',
    'exceptionless.admin',
    'exceptionless.dialog',
    'exceptionless.notification',
    'exceptionless.organization',
    'exceptionless.user',
    'exceptionless.refresh'
  ]);
}());