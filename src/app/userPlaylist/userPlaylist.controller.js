angular.module('finalProj')

.factory('GetPlaylistsResource', function($resource) {
  return $resource('/api/index.json', {},
    { get: { method: 'GET', isArray: false } }
  )
})

.factory('AddPlaylistResource', function($resource) {
  return $resource('/api/playlists/add.json', {},
    { post: { method: 'POST', isArray: false }}
  )
})

.controller('PlaylistCtrl', function ($sce, AddTrack, GetPlaylistsResource, PopularTracks, AddPlaylistResource, $scope) {
  var self = this;

  self.playlists = {}

  $scope.$on('logged-in', function(event, args) {
    GetPlaylistsResource.get(undefined, function(response) {
      self.playlists = response.playlists
      for(var key in self.playlists) {
        for(var i=0; i < self.playlists[key].length; i++) {
          self.playlists[key][i].url = $sce.trustAsResourceUrl(self.playlists[key][i].url)
        }
      }
    })
  });

  self.droppedObj = {}

  self.dropping = function(e, ui, name) {
    self.droppedObj.url = self.droppedObj.post_url
    self.droppedObj.playlist_name = name
    self.playlists[name].push(self.droppedObj)
    AddTrack.add(angular.copy(self.droppedObj))
  }

  self.add = function(event) {
    if (event.charCode == 13) {
      AddPlaylistResource.post({}, { name: self.playlist.name }, function(response) {
        //if (response.status == 201) {
          self.playlists[self.playlist.name] = []
          self.playlist.name = ''
        //}
      })
    }
  }
})