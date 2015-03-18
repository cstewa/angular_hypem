'use strict';

angular.module('finalProj')
  .factory('PopularPlaylist', function($resource) {
    return $resource('http://localhost:8080/api/popular')
  })

  .service('PopularTracks', function(PopularPlaylist) {
    this.popular = [];
  })

  .controller('MainCtrl', function ($scope, $state, $sce, PopularTracks, PopularPlaylist, GetPlaylistsResource) {
    var self = this;

    //move this out your controller and put it in a factory!
    PopularPlaylist.query(undefined, function(response) {
      for (var i = response.length - 1; i >= 0; i--) {
        response[i].post_url = $sce.trustAsResourceUrl(response[i].post_url)
      };
      PopularTracks.popular = response.slice(0,3)
      self.popular = angular.copy(PopularTracks.popular);
    })

    $state.go('home.playlists')
  });
