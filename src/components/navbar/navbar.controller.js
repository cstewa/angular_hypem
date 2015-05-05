'use strict';

angular.module('finalProj')
  .service('CurrentUser', function() {
    this.hypem = null;
  })

  .value('AuthToken', '')

  .factory("AuthInterceptor", function($q, $injector) {
    return {
      request: function(config) {
        var token = $injector.get("AuthToken");
        console.log(token)
        config.headers = config.headers || {};
        if (token) {
          config.headers.Authorization = "Bearer" + token
          console.log(config.headers)
        }
        return config || $q.when(config);
      }
    }
  })

  .factory('Logout', function($resource) {
    return $resource('/api/logout.json', {},
      { logout: { method: 'DELETE', isArray: false }}
    )
  })

  .factory('CurrentUserResource', function($resource) {
    return $resource('/api/sessions/show', {},
      { get: { method: 'GET', isArray: false }}
    )
  })

  .controller('NavbarCtrl', function (CurrentUser, CurrentUserResource, $scope, $modal, $state, Logout) {
    $scope.login = function() {
      var modalPromise = $modal.open({
        templateUrl: 'app/auth/loginModal.html',
        controller: 'LoginModalCtrl as ctrl'
      })
      modalPromise.result.then(function onSuccess(result) {
        CurrentUser.hypem = result.hypem
        $scope.currentUserHypem = CurrentUser.hypem
      }, function onError(error) {
        console.log("error:")
        console.log(error)
      })
    }

    $scope.signup = function() {
      var modalPromise = $modal.open({
        templateUrl: 'app/auth/signupModal.html',
        controller: 'SignupModalCtrl as ctrl'
      })
      modalPromise.result.then(function onSuccess(result) {
        CurrentUser.hypem = result.hypem
        $scope.currentUserHypem = CurrentUser.hypem
      }, function onError(error) {
        console.log(error)
      })
    }

    $scope.logout = function() {
      Logout.logout({}, {}, function(result) {
        CurrentUser.hypem = null
        $scope.currentUserHypem = CurrentUser.hypem
      })
    }

    $scope.getCurrentUser = function() {
      CurrentUserResource.get({}, {}, function(result) {
        console.log(result)
      })
    }
  });
