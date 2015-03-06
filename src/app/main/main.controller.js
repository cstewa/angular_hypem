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

  .controller('MainCtrl', function ($sce, PopularPlaylist) {
    var self = this;

    PopularPlaylist.query(undefined, function(response) {
      for (var i = response.length - 1; i >= 0; i--) {
        response[i].post_url = $sce.trustAsResourceUrl(response[i].post_url)
      };
      self.popular = response;
    })
  });
