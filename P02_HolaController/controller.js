// Retorna una referencia a la aplicación.
var app = angular.module("MyFirstApp", []);
// La variable $scope enlaza la información del controlador con la vista.
app.controller("FirstController", function ($scope) {
    $scope.nombre = "Porfirio";
});