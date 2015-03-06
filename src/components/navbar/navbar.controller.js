'use strict';

angular.module('finalProj')
  .controller('NavbarCtrl', function ($scope, $modal, $state) {
    $scope.login = function() {
      var modalPromise = $modal.open({
        templateUrl: 'app/auth/loginModal.html',
        controller: 'LoginModalCtrl as ctrl',
        backdrop: 'static'
      })
      modalPromise.result.then(function onSuccess(result) {
        //here is where you make the request to see if they're logged in
        $state.go('home')
        console.log(result.hypem)
      }, function onError(error) {
        console.log(error)
      })
    }

    $scope.signup = function() {
      var modalPromise = $modal.open({
        templateUrl: 'app/auth/signupModal.html',
        controller: 'SignupModalCtrl as ctrl',
        backdrop: 'static'
      })
      modalPromise.result.then(function onSuccess(result) {
        //here is where you make the request to see if they're logged in
        $state.go('home')
        console.log(result.hypem)
      }, function onError(error) {
        console.log(error)
      })
    }
  });
