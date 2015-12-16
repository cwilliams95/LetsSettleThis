app.controller("mainController", ["$scope",
function($scope)
{
  $scope.title = "Let's Settle This";
  $scope.roll = function() {
    var randomRoll = function() {
      1 + Math.floor(Math.rand() * 6);
    };
    return randomRoll + randomRoll;
  }
}])
