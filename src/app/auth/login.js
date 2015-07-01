angular.module('finalProj')

.factory('Login', function($resource) {
  return $resource('/api/login.json', {},
    { makePost: { method: 'POST', isArray: false }}
  )
})

.controller('LoginModalCtrl', function(Login, $rootScope, $scope, $modalInstance, AuthToken, $injector) {
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
      debugger
      AuthToken = response.auth_token
      console.log('******setting auth token****')
      console.log(AuthToken)
      $rootScope.$broadcast('logged-in')
      $modalInstance.close(self.user)
    }, function onError(response) {
      self.error = response.data.errors
    });
  };
})
