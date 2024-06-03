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

    function createObstacle(name, x, y, imagesize, hitzoneSize){
      var hitzone = game.createObstacle(hitzoneSize, 50);
      hitzone.x = x;
      hitzone.y = y;
      game.addGameItem(hitzone);
      var obstacleImage = draw.bitmap("img/" + name + ".png");
      obstacleImage.x = hitzoneSize * -1;
      obstacleImage.y = hitzoneSize * -1;
      obstacleImage.scaleX = imagesize;
      obstacleImage.scaleY = imagesize;
      if (name==='plant'){
        imagesize = 0.175
        obstacleImage.scaleY*=1.25
      }
      hitzone.addChild(obstacleImage);
    };

    function createEnemy(x){
      var hitZoneSize = 25
      var enemy = game.createGameItem("enemy", hitZoneSize);
      var enemyImage = draw.bitmap("img/enemy.png");
      enemyImage.scaleX = 0.1
      enemyImage.scaleY = 0.1
      enemyImage.x = hitZoneSize * -1.5;
      enemyImage.y = hitZoneSize * -1.5;
      enemy.addChild(enemyImage);
      enemy.x = x;
      enemy.y = groundY - 35;
      game.addGameItem(enemy);
      enemy.velocityX = -3;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-50);
        enemy.fadeOut();
      };

      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.fadeOut();
      };
    };


    function createReward(x){
      var rewardSize = 25;
      var reward = game.createGameItem("reward", rewardSize);
      var rewardImage = draw.bitmap("img/mushroom.png");
      rewardImage.scaleX = 0.09
      rewardImage.scaleY = 0.09
      rewardImage.x = -1.5 * rewardSize;
      rewardImage.y = -1.5 * rewardSize;
      reward.addChild(rewardImage);
      reward.x = x;
      reward.y = groundY - 30;
      game.addGameItem(reward);
      reward.velocityX = -2;

      reward.onPlayerCollision = function(){
        game.changeIntegrity(50);
        game.increaseScore(100);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function(){
        game.increaseScore(100);
        reward.fadeOut();
      };
    };

    function createMarker(x){
      var markerSize = 200;
      var marker = game.createGameItem("marker", markerSize);
      var markerImage = draw.bitmap("img/end.webp")
      //image scaled to 1/2
      markerImage.scaleX = 1;
      markerImage.scaleY = 1;
      markerImage.x = -1.5 * markerSize;
      markerImage.y = -1.5 * markerSize;
      marker.addChild(markerImage);
      marker.x = x;
      marker.y = groundY - 175;
      game.addGameItem(marker);
      marker.velocityX = -2;
      //when the marker is touched, the player starts the next level, gains 10 health, and gains 100 score
      marker.onPlayerCollision = function(){
        startLevel();
        game.changeIntegrity(10);
        game.increaseScore(100);
        marker.fadeOut();
      };
      //when the marker is shot, the player just gets sent to the next level
      marker.onProjectileCollision = function(){
        startLevel();
      };
    };

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = level.gameItems
      for (var i in levelObjects){
        if (levelObjects[i].name === 'spike'){
          createObstacle("spike", levelObjects[i].x, groundY - 25, 0.075, 30)
        } else if (levelObjects[i].name === 'plant'){
          createObstacle("plant", levelObjects[i].x, groundY - 125, 0.175, 45)
        } else if (levelObjects[i].name === 'enemy'){
          createEnemy(levelObjects[i].x);
        } else if (levelObjects[i].name === 'reward'){
          createReward(levelObjects[i].x);
        } else if (levelObjects[i].name === 'marker'){
          createMarker(levelObjects[i].x);
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
