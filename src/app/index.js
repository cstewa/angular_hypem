'use strict';

angular.module('finalProj', ['ngResource', 'ui.router', 'ui.bootstrap', 'ngDragDrop'])
  .config(function ($sceDelegateProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/hypemPlaylist/hypemPlaylist.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl',
      })
      .state('home.playlists', {
        url: '/',
        templateUrl: 'app/userPlaylist/userPlaylist.html',
        controller: 'PlaylistCtrl',
        controllerAs: 'playlistCtrl'
      })

    $urlRouterProvider.otherwise('/');

    $sceDelegateProvider.resourceUrlWhitelist(['self',
      '^(?:http(?:s)?:\/\/)?.*']);
  })
;
