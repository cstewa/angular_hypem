angular.module('finalProj')

.factory('Signup', function($resource) {
  return $resource('/api/signup.json', {},
    { makePost: { method: 'POST', isArray: false }}
  )
})

.controller('SignupModalCtrl', function(Signup, $modalInstance) {
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
      console.log("hypem reponse: ")
      console.log(response)
      $modalInstance.close(self.user)
      //display that user is signed in
    }, function onError(response) {
      self.error = response.data.errors
    });
  };
})
