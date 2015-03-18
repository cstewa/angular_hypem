angular.module('finalProj')
  .directive('userTrackDirective', function() {
    return {
      templateUrl: 'app/userTrack/userTrackDirective.html',
      restrict: 'A',
      scope: {
        tracks: '='
      }
    }
  })

  .factory('AddTrackResource', function($resource) {
    return $resource('/api/tracks/add.json', {},
      { post: { method: 'POST', isArray: false }}
    )
  })

  .service('AddTrack', function(AddTrackResource) {
    this.add = function(track) {
      track.post_url = track.post_url.toString()
      AddTrackResource.post({}, track)
    }
  })