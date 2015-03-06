angular.module('finalProj')

.factory('Signup', function($resource) {
  return $resource('http://localhost:8080/api/signup', {},
    { makePost: { method: 'POST', isArray: false }}
  )
})

.controller('SignupModalCtrl', function(Signup, $modalInstance) {
  var self = this;

  self.submit = function() {
    Signup.makePost({}, {user: "testing"})
    .$promise
    .then(function onSuccess(response) {
      $modalInstance.close(self.user)
    }, function onError(response) {
      console.log(response)
    });
  };
})
