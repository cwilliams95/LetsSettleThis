app.controller("newGameController", ["$scope",
function($scope) {
  $scope.title = "Let's Settle This";
  $scope.roll = function() {
    var randomRoll = function() {
      return 1 + Math.floor(Math.rand() * 6);
    };
    return randomRoll + randomRoll;
  };
  
  //function to create a new player and return the player's name as the name for the object created.
  $scope.newPlayer = function (name) {
    var name = {
      "points": 0,
      "resources": [{
        "lumber": [{ "value": [], "multiplier": 1, "count": 0}],
        "grain": [{ "value": [], "multiplier": 1, "count": 0}],
        "wool": [{ "value": [], "multiplier": 1, "count": 0}],
        "ore": [{ "value": [], "multiplier": 1, "count": 0}],
        "brick": [{ "value": [], "multiplier": 1, "count": 0}]
      }]
    };
    return name;
  };
  
  //function that takes the player name, a tile object formatted to be searched
  $scope.newSettlement = function(name, tiles) {
    tiles.forEach(function(tile){
      name.resources[tile.resource].push(tile.value);
    })
  
}]);

  
