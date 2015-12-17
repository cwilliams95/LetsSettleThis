app.controller("mainController", ["$scope",
function($scope)  {
  $scope.title = "Let's Settle This";
  $scope.roll = function() {
    var randomRoll = function() {
      return 1 + Math.floor(Math.rand() * 6);
    };
    return randomRoll + randomRoll;
  };
  $scope.players = function(name) {
    this.name = name;
    this.points = 0;
    this.resources = {
      "lumber": null,
      "grain": null,
      "wool": null,
      "ore": null,
      "brick": null,
    };
    this.tiles = function()
  }
  $scope.library = function(player) {
    return this.points += this.points
  $scope.monopoly = function(player, resource) {
    return this.
  }
}]);
