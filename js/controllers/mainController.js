app.controller("mainController", ["$scope",
function($scope)  {
  $scope.title = "Let's Settle This";
  
  //  Random Dice Roll function
  $scope.roll = function() {
    var randomRoll = function() {
      return 1 + Math.floor(Math.rand() * 6);
    };
    return randomRoll + randomRoll;
  };
  $scope.newplayer = function (name) {
    this.name = name;
    this.points = 0;
    this.resources = {
      "lumber": [{ "value": null, "multiplier": 1, "count": 0}],
      "grain": [{ "value": null, "multiplier": 1, "count": 0}],
      "wool": [{ "value": null, "multiplier": 1, "count": 0}],
      "ore": [{ "value": null, "multiplier": 1, "count": 0}],
      "brick": [{ "value": null, "multiplier": 1, "count": 0}]
    };
  };
  $scope.newSettlement = function(name, tiles) {
      if(tiles.lumber === true) {
        players.name.resources 
    }
  $scope.library = function(player) {
    return this.points += this.points
  $scope.monopoly = function(player, resource) {
    return this.
  }
}]);
