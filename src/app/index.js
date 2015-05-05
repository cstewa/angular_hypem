'use strict';

// somewhere, you write login.then, since login returns a promise

angular.module('finalProj', ['ngResource', 'ui.router', 'ui.bootstrap', 'ngDragDrop'])
  .config(function ($httpProvider, $sceDelegateProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    $httpProvider.interceptors.push("AuthInterceptor")

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
