angular.module('finalProj')
  .directive('userTrackDirective', function() {
    return {
      templateUrl: 'app/track/userTrackDirective.html',
      restrict: 'A',
      scope: {
        tracks: '='
      }
    }
  })