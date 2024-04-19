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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    //obstacle function that takes multiple properties to customize each obstacle
    function createObstacle(type, x, y, size, damage){
      //uses the size and damage paramater to create the obstacles hitzone
      var hitzone = game.createObstacle(size, damage);
      //sets the position to the given x and y
      hitzone.x = x;
      hitzone.y = y;
      game.addGameItem(hitzone);
      //uess a bitmap to draw the image onto where the hitzone is located
      var obstacleImage = draw.bitmap("img/" + type + ".png"); //concatonation :0
      //sets the image position to be -1.5(size)
      obstacleImage.x = size * -1.5;
      obstacleImage.y = size * -1.5;
      hitzone.addChild(obstacleImage);
    };

    //enemy function similar to obstacle
    function createEnemy(type, x, y, scale){
      //hitzone size is set to 25 instead of being a paramater
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
      //enemy moves 3 positions to the left every frame
      enemy.velocityX = -3;
      //when the player touches the enemy the enemy dies and the player takes 25 damage
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25);
        enemy.fadeOut();
      };
      //when the player shoots the enemy it dies and the player gains score
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);
        enemy.fadeOut();
      };
    };

    //reward function similar to obstacle
    function createReward(type, x, y, scale){
      //set size for the rewards
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
      //reward moves 2 positions to the left every frame
      reward.velocityX = -2;
      //when the player touches the reward, they gain 10 health and 100 score
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10);
        game.increaseScore(100);
        reward.fadeOut();
      };
      //when the player shoots the reward, they gain 100 score, but no health
      reward.onProjectileCollision = function(){
        game.increaseScore(100);
        reward.fadeOut();
      };
    };

    //marker function similar to reward function
    function createMarker(x, y){
      //set marker size
      var markerSize = 200;
      var marker = game.createGameItem("marker", markerSize);
      var markerImage = draw.bitmap("img/poet.jpg")
      //image scaled to 1/2
      markerImage.scaleX = 0.5;
      markerImage.scaleY = 0.5;
      markerImage.x = -1 * markerSize;
      markerImage.y = -1 * markerSize;
      marker.addChild(markerImage);
      marker.x = x;
      marker.y = y;
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
      //get the info for the level from the object
      var level = levelData[currentLevel]
      //get the items
      var levelObjects = level.gameItems
      //loop to use the function created and the object with the level info to create the items
      for (var i in levelObjects){
        //gets the paramaters for the functions from the info that was passed into the object with the type specified
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
