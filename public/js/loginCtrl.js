'use strict';

angular.module('loginApp')

    .controller('loginCtrl', ["$scope", "$http", ($scope, $http) => {

        $scope.login = () => {
            $http.post("/api/login", {
                email: $scope.email,
                password: $scope.password
            }).then(r => {
                $scope.user = r.data;
            }, e => {
                $scope.errorMessage = e.data.message;
            });
        }
        $scope.passwordReset = () => {
            if (typeof $scope.newPassword === "undefined" || typeof $scope.newPassword.length === 0) {
                alert('Enter a new password');
            } else {
                alert("Reset Password API call here. " + $scope.newPassword);
            }
        }
        $scope.logOut = () => {
            alert("Closed Session")
            window.location = window.location.origin
        }
    }]);