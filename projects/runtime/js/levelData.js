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
        name: "Robot crashout",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", name: "pike", x: 400, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 550, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 700, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "tnt", x: 850, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 1000, y: groundY, size: 25, damage: 30},
          { type: "enemy", name: "medium", x: 1400, y: groundY - 60, scale: 0.25},
          { type: "obstacle", name: "pike", x: 1550, y: groundY, size: 25, damage: 25},
          { type: "enemy", name: "skibidi", x: 2000, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "ghastly", x: 2750, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2800, y: groundY - 60, scale: 0.1},
          { type: "reward", name: "slim", x: 2250, y: groundY - 60, scale: 0.075},
          { type: "enemy", name: "ghastly", x: 2850, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2900, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 2950, y: groundY - 60, scale: 0.1},
          { type: "enemy", name: "ghastly", x: 3000, y: groundY - 60, scale: 0.1},
          { type: "obstacle", name: "pike", x: 2500, y: groundY, size: 25, damage: 25},
          { type: "obstacle", name: "pike", x: 2525, y: groundY, size: 25, damage: 25},
          { type: "reward", name: "slim", x: 2750, y: groundY - 60, scale: 0.075},
          { type: "obstacle", name: "tnt", x: 3000, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 3150, y: groundY, size: 25, damage: 30},
          { type: "obstacle", name: "tnt", x: 3300, y: groundY, size: 25, damage: 30},
          { type: "enemy", name: "wolf", x: 4400, y: groundY - 60, scale: 0.25},
          { type: "reward", name: "slim", x: 3750, y: groundY - 60, scale: 0.075},
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
          { type: "reward", name: "slim", x: 775, y: groundY - 60, scale: 0.075},
          { type: "reward", name: "coin", x: 1150, y: groundY - 60, scale: 0.075},
          { type: "marker", x: 6000, y: groundY},

        ],
      },
      {
        name: "crashout Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", name: "sawblade", x: 400, y: groundY, size: 25, damage: 10},
          { type: "enemy", name: "medium", x: 1500, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "skibidi", x: 2000, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "ghastly", x: 2500, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "wolf", x: 3000, y: groundY - 60, scale: 0.25},
          { type: "enemy", name: "sigma", x: 3500, y: groundY - 60, scale: 0.25},
          { type: "reward", name: "slim", x: 750, y: groundY - 60, scale: 0.075},
          { type: "reward", name: "coin", x: 1000, y: groundY - 60, scale: 0.075},
          { type: "marker", x: 5000, y: groundY - 60},
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
