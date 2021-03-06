angular.module('finalProj')

.factory('Signup', function($resource) {
  return $resource('/api/signup.json', {},
    { makePost: { method: 'POST', isArray: false }}
  )
})

.controller('SignupModalCtrl', function(Signup, AuthToken, $modalInstance) {
  var self = this;

  self.submit = function() {
    Signup.makePost({}, {
      user: {
        "first_name": self.user.first,
        "last_name": self.user.last,
        "hypem": self.user.hypem,
        "password": self.user.password,
        "password_confirmation": self.user.confirmation
      }
    })
    .$promise
    .then(function onSuccess(response) {
      AuthToken = response.auth_token
      console.log('****setting auth token')
      console.log(AuthToken)
      $modalInstance.close(self.user)
    }, function onError(response) {
      self.error = response.data.errors
    });
  };
})
