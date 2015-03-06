angular.module('finalProj')

.factory('Signup', function($resource) {
  return $resource('http://localhost:8080/api/signup')
})

.controller('SignupCtrl', function($state, $urlRouter, $modal) {
  var modalPromise = $modal.open({
    templateUrl: 'app/auth/signupModal.html',
    controller: 'SignupModalCtrl as ctrl',
    backdrop: 'static'
  })
  modalPromise.result.then(function onSuccess(result) {
    $state.go('home')
    console.log(result.hypem)
  }, function onError(error) {
    console.log(error)
  })
})

.controller('SignupModalCtrl', function(Signup, $modalInstance) {
  var self = this;

  self.submit = function() {
    Signup.save({}, {user: self.user})
    .$promise
    .then(function onSuccess(response) {
      $modalInstance.close(self.user)
    }, function onError(response) {
      console.log(response)
    });
  };
})
