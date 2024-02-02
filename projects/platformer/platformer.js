$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      platformImage = document.getElementById("platform");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //middle platforms
    createPlatform(0, 600, 1500, 10)
    createPlatform(0, 400, 1500, 10)
    createPlatform(0, 200, 1500, 10)

    //fortnite


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("right", 600,  Math.random() * (2500 - 1000) + 1000);
    createCannon("right", 400,  Math.random() * (2500 - 1000) + 1000);
    createCannon("right", 200,  Math.random() * (2500 - 1000) + 1000);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});

function collectableHandler(){
  if (playTimer===500){
    createCollectable("wood", Math.random()*1250, 370, 6, 0.7);
  } else if (playTimer===1000){
    createCollectable("stone", Math.random()*1250, 170, 6, 0.7);
  } else if (playTimer===1500){
    createCollectable("coal", Math.random()*1250, 570, 6, 0.7);
  } else if (playTimer===2000){
    createCollectable("copper", Math.random()*1250, 170, 6, 0.7);
  } else if (playTimer===2500){
    createCollectable("iron", Math.random()*1250, 370, 6, 0.7);
  } else if (playTimer===3000){
    createCollectable("redstone", Math.random()*1250, 370, 6, 0.7);
  } else if (playTimer===3500){
    createCollectable("lapiz", Math.random()*1250, 170, 6, 0.7);
  } else if (playTimer===4000){
    createCollectable("gold", Math.random()*1250, 570, 6, 0.7);
  } else if (playTimer===4500){
    createCollectable("diamond", Math.random()*1250, 170, 6, 0.7);
  } else if (playTimer===5000){
    createCollectable("emerald", Math.random()*1250, 370, 6, 0.7);
  } else if (playTimer===5500){
    createCollectable("netherite", Math.random()*1250, 570, 6, 0.7);
  }
}