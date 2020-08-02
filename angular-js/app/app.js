var myApp = angular.module('myApp', []);
console.log("hello")
myApp.controller('myAppController', ['$scope', function($scope){
    $scope.ninjas = [
        {
            name: 'yoshi',
            belt: 'green',
            rate: 30
        },
        {
            name: 'crystal',
            belt: 'yellow',
            rate: 20
        },
        {
            name: 'ryu',
            belt: 'orange',
            rate: 10
        },
        {
            name: 'shaun',
            belt: 'black',
            rate: 500
        }
    ]
}])