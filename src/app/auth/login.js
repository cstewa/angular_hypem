angular.module('finalProj')

.factory('Login', function($resource) {
  return $resource('/api/login.json', {},
    { makePost: { method: 'POST', isArray: false }}
  )
})

.controller('LoginModalCtrl', function(Login, $rootScope, $scope, $modalInstance) {
  var self = this;

  self.submit = function() {
    Login.makePost({}, {
      user: {
        "hypem": self.user.hypem,
        "password": self.user.password,
      }
    })
    .$promise
    .then(function onSuccess(response) {
      $rootScope.$broadcast('logged-in')
      $modalInstance.close(self.user)
    }, function onError(response) {
      self.error = response.data.errors
    });
  };
})
