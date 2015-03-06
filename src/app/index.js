'use strict';

angular.module('finalProj', ['ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($sceDelegateProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl',
      })

    $urlRouterProvider.otherwise('/');

    $sceDelegateProvider.resourceUrlWhitelist(['self',
      '^(?:http(?:s)?:\/\/)?.*']);
  })
;
