angular.module("app", [])
    .controller('registrationController', ['$scope', '$http', function ($scope, $http) {
        $scope.username = "";
        $scope.users = "";
        $scope.count = 0;
        $scope.error = "";
        
        $scope.Registration = () => {
            if($scope.username == "" || $scope.username == $scope.users){
                $scope.error = "Enter proper name"
            }else{
            $scope.data = {
                username: $scope.username,
                count:$scope.count
            }
            $http({
                method: 'POST',
                url: 'http://18.219.36.140:3001/registration',
                data: $scope.data,
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                $scope.users = response.data.users;
                $scope.count = response.data.count;
            }, (response) => {
                $scope.error = response.statusText;
            });
            $scope.error = ""
        };
        }
    }]);
