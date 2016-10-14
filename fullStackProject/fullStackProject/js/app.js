var app = angular.module('fullstackproject', ['nya.bootstrap.select','chart.js', 'ui.grid']);

app.controller("appController", function ($scope,$http) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $http({"method":"get","url": "../data/Stocks.json" }).success(function(result){
        $scope.stocks = result;
    });
    //$scope.myData
    $http({"method":"get","url": "http://localhost:3000/table1data" }).success(function(result){
        //$scope.table1Data = result;
        console.log(result);
        $scope.table1Data = result.data;
    });
    $http({"method":"get","url": "http://localhost:3000/table2data" }).success(function(result){
        $scope.table2Data = result.data;
    });
    $http({"method":"get","url": "http://localhost:3000/table3data" }).success(function(result){
        $scope.table3Data = result.data;
    });
});