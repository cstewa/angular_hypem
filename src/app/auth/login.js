angular.module('finalProj')

.controller('LoginModalCtrl', function($modalInstance) {
  var self = this;

  self.submit = function() {
    $modalInstance.close(self.user)
  };


})
