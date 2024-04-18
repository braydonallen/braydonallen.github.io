var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacle(type, x, y, size, damage){
      var hitzone = game.createObstacle(size, damage);
      hitzone.x = x;
      hitzone.y = y;
      game.addGameItem(hitzone);
      var obstacleImage = draw.bitmap("img/" + type + ".png");
      obstacleImage.x = size * -1.5;
      obstacleImage.y = size * -1.5;
      hitzone.addChild(obstacleImage);
    };

    function createEnemy(type, x, y, scale){
      var hitZoneSize = 25
      var enemy = game.createGameItem("enemy", hitZoneSize);
      var enemyImage = draw.bitmap("img/" + type + ".png");
      enemyImage.scaleX = scale
      enemyImage.scaleY = scale
      enemyImage.x = -hitZoneSize;
      enemyImage.y = -hitZoneSize;
      enemy.addChild(enemyImage);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -3;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25);
        enemy.fadeOut();
      };
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.fadeOut();
      };
    };

    function createReward(type, x, y, scale){
      var rewardSize = 25;
      var reward = game.createGameItem("reward", rewardSize);
      var rewardImage = draw.bitmap("img/" + type + ".png");
      rewardImage.scaleX = scale
      rewardImage.scaleY = scale
      rewardImage.x = -1 * rewardSize;
      rewardImage.y = -1 * rewardSize;
      reward.addChild(rewardImage);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -2;
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10);
        game.increaseScore(100);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function(){
        game.increaseScore(100);
        game.changeIntegrity(10);
        reward.fadeOut();
      };
    };

    function createMarker(x, y){
      var markerSize = 200;
      var marker = game.createGameItem("marker", markerSize);
      var markerImage = draw.bitmap("img/poet.jpg")
      markerImage.x = -1 * markerSize;
      markerImage.y = -1 * markerSize;
      marker.addChild(markerImage);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = -2;
      marker.onPlayerCollision = function(){
        startLevel();
        game.changeIntegrity(10);
        game.increaseScore(100);
        marker.fadeOut();
      };
      marker.onProjectileCollision = function(){
        startLevel();
        game.changeIntegrity(10);
        game.increaseScore(100);
        marker.fadeOut();
      };
    };

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = level.gameItems
      for (var i in levelObjects){
        if (levelObjects[i].type === 'obstacle'){
          createObstacle(levelObjects[i].name, levelObjects[i].x, levelObjects[i].y, levelObjects[i].size, levelObjects[i].damage);
        } else if (levelObjects[i].type === 'enemy'){
          createEnemy(levelObjects[i].name, levelObjects[i].x, levelObjects[i].y, levelObjects[i].scale);
        } else if (levelObjects[i].type === 'reward'){
          createReward(levelObjects[i].name, levelObjects[i].x, levelObjects[i].y, levelObjects[i].scale);
        } else if (levelObjects[i].type === 'marker'){
          createMarker(levelObjects[i].x, levelObjects[i].y);
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
