angular.module('finalProj')

.factory('PlaylistResource', function($resource) {
  return $resource('/api/index.json', {},
    { get: { method: 'GET', isArray: false } }
  )
})

.factory('AddPlaylistResource', function($resource) {
  return $resource('/api/playlists/add.json', {},
    { post: { method: 'POST', isArray: false }}
  )
})

.controller('PlaylistCtrl', function (PlaylistResource, AddPlaylistResource) {
  var self = this;

  self.getPlaylists = function() {
    PlaylistResource.get(undefined, function(response) {
      self.playlists = response.playlists
      console.log(self.playlists)
    })
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