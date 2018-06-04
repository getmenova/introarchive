var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'First ';
});

app.directive('exampleDirective', function() {
  return {
    restrict: 'E',
    template: '<p>Hello {{name}}!</p>',
    controller: function($scope, $element){
      $scope.name = $scope.name + "Second ";
    },
    link: function(scope, el, attr) {
      scope.name = scope.name + "Third ";
    }
  }
})