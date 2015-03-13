'use strict';

angular.module('finalProj', ['ngResource', 'ui.router', 'ui.bootstrap', 'ngDraggable'])
  .config(function ($sceDelegateProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl',
      })
      .state('home.playlists', {
        url: '/',
        templateUrl: 'app/playlist/playlist.html',
        controller: 'PlaylistCtrl',
        controllerAs: 'playlistCtrl'
      })

    $urlRouterProvider.otherwise('/');

    $sceDelegateProvider.resourceUrlWhitelist(['self',
      '^(?:http(?:s)?:\/\/)?.*']);
  })
;
