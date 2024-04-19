var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      
      {

        //level 1
        name: "crashout Rampage",
        number: 1,
        speed: -3,
        gameItems: [
          //some simple jumps to introduce the movement 
          { type: "obstacle", name: "pike", x: 400, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "pike", x: 600, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "pike", x: 800, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "pike", x: 1000, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "pike", x: 1200, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "pike", x: 1400, y: groundY, size: 25, damage: 10},
          //the player needs to duck and jump in time so they can survive
          { type: "obstacle", name: "tnt", x: 2000, y: groundY-100, size: 25, damage: 30},
          { type: "obstacle", name: "pike", x: 2200, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "tnt", x: 2400, y: groundY-100, size: 25, damage: 30},
          { type: "obstacle", name: "pike", x: 2600, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "tnt", x: 2800, y: groundY-100, size: 25, damage: 30},
          { type: "obstacle", name: "pike", x: 3000, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "tnt", x: 3200, y: groundY-100, size: 25, damage: 30},
          { type: "obstacle", name: "pike", x: 3400, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "tnt", x: 3600, y: groundY-100, size: 25, damage: 30},
          { type: "obstacle", name: "pike", x: 3800, y: groundY, size: 25, damage: 10},
          { type: "obstacle", name: "tnt", x: 4000, y: groundY-100, size: 25, damage: 30},
          //the player is introduced to the first enemies
          { type: "enemy", name: "medium", x: 2500, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "skibidi", x: 2000, y: groundY - 60, scale: 0.25},
          //rewards for the player to collect
          { type: "reward", name: "slim", x: 750, y: groundY - 60, scale: 0.075},
          { type: "reward", name: "coin", x: 1000, y: groundY - 60, scale: 0.075},
          //end of level marker
          { type: "marker", x: 5000, y: groundY - 60},
        ],
      },
      {
        //level 2
        name: "Robot crashout",
        number: 2,
        speed: -3,
        gameItems: [
          //quicker jumps to speed up the gameplay
          { type: "obstacle", name: "pike", x: 400, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 550, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 700, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "tnt", x: 850, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 1000, y: groundY, size: 25, damage: 30},
          //enemy going after the player while they are jumping
          { type: "enemy", name: "medium", x: 1400, y: groundY - 60, scale: 0.25},
          //single spike to catch the player
          { type: "obstacle", name: "pike", x: 1550, y: groundY, size: 25, damage: 25},
          //enemy that distracts the player while they go by the spike
          { type: "enemy", name: "skibidi", x: 2000, y: groundY - 60, scale: 0.25},
          //a group of ghastly with a slim jim reward in the middle of them
          { type: "enemy", name: "ghastly", x: 2750, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2800, y: groundY - 60, scale: 0.1},
          { type: "reward", name: "slim", x: 2250, y: groundY - 60, scale: 0.075},
          { type: "enemy", name: "ghastly", x: 2850, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2900, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2950, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 3000, y: groundY - 60, scale: 0.1},
          //a double spike jump
          { type: "obstacle", name: "pike", x: 2500, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 2525, y: groundY, size: 25, damage: 25},
          //reward for the jump
          { type: "reward", name: "slim", x: 2750, y: groundY - 60, scale: 0.075},
          //3 tnt jumps to warm up
          { type: "obstacle", name: "tnt", x: 3000, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 3150, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 3300, y: groundY, size: 25, damage: 30},
          //enemy to introduce the next part
          { type: "enemy", name: "wolf", x: 4400, y: groundY - 60, scale: 0.25},
          { type: "reward", name: "slim", x: 3750, y: groundY - 60, scale: 0.075},
          //hte player needs to duck from the tnt and collect the coins while there is an enemy also going after them
          { type: "obstacle", name: "tnt", x: 4000, y: groundY - 100, size: 25, damage: 30},
          { type: "reward", name: "coin", x: 4100, y: groundY - 100, scale: 0.075},
          { type: "obstacle", name: "tnt", x: 4200, y: groundY - 100, size: 25, damage: 30},
          { type: "reward", name: "coin", x: 4300, y: groundY - 100, scale: 0.075},
          { type: "obstacle", name: "tnt", x: 4400, y: groundY - 100, size: 25, damage: 30},
          { type: "reward", name: "coin", x: 4500, y: groundY - 100, scale: 0.075},
          { type: "obstacle", name: "tnt", x: 4600, y: groundY - 100, size: 25, damage: 30},
          { type: "reward", name: "coin", x: 4700, y: groundY - 100, scale: 0.075},
          { type: "obstacle", name: "tnt", x: 4800, y: groundY - 100, size: 25, damage: 30},
          { type: "enemy", name: "sigma", x: 7500, y: groundY - 60, scale: 0.1},
          //rewards
          { type: "reward", name: "slim", x: 775, y: groundY - 60, scale: 0.075},
          { type: "reward", name: "coin", x: 1150, y: groundY - 60, scale: 0.075},
          //end of game marker
          { type: "marker", x: 6000, y: groundY- 120},

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
