'use strict';

angular.module('finalProj')
  .directive('hypemPlaylistDirective', function() {
    return {
      templateUrl: 'app/main/hypemPlaylistDirective.html',
      restrict: 'A',
      scope: {
        title: '=',
        artist: '=',
        blog: '=',
        posturl: '='
      }
    }
  })

  .factory('PopularPlaylist', function($resource) {
    return $resource('http://localhost:8080/api/popular')
  })

  .controller('MainCtrl', function ($state, $sce, PopularPlaylist, PlaylistResource) {
    var self = this;

    //move this out your controller and put it in a factory i think!
    // PopularPlaylist.query(undefined, function(response) {
    //   for (var i = response.length - 1; i >= 0; i--) {
    //     response[i].post_url = $sce.trustAsResourceUrl(response[i].post_url)
    //   };
    //   self.popular = response;
    // })

    self.popular = [{
      title: "c",
      blog: "h",
      post_url: "r",
      artist: "i"
    }]

    $state.go('home.playlists')
  });
