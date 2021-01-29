angular.module("app", [])
    .controller('sampleController', ['$scope', '$http', function ($scope, $http) {
        $scope.name = "";
        $scope.response = "Name not sent to the server";

        $scope.onSubmit = function () {
            $scope.data = {
                name: $scope.name
            }
            $http({
                method: 'POST',
                // url: 'http://127.0.0.1:3001/submitForm',
                url: 'http://18.219.36.140:3001/submitForm',
                data: $scope.data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function mySuccess(response) {
                $scope.response = response.data.status;
                console.log(response.data)
            }, function myError(response) {
                $scope.response = response.statusText;
            });
        };
    }]);