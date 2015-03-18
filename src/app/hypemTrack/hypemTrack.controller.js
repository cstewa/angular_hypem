angular.module('finalProj')
  .directive('hypemTrackDirective', function() {
    return {
      templateUrl: 'app/hypemTrack/hypemTrackDirective.html',
      restrict: 'A',
      scope: {
        track: '='
      }
    }
  })