var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        
        //creates an array to store all of the buildings that will be created
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game

            //my theme is not obvious, but it is insanity
            //There is no deep meaning behind why this is the theme, i just thought it would be fun to have it be that way. 















            //creates a background using the selected image by drawing with a bitmap
            var bg = draw.bitmap('img/background.png');
            bg.x = 0;
            bg.y = 0;
            //sets the scale of the image
            bg.scaleY = 1.5;
            bg.scaleX = 1.5;
            background.addChild(bg);
        
            //uses a loop to create 100 little circles that appear as white stars on the background
            for (var i = 0; i<100; i++){
                //create the circle and define its properites
                var circle = draw.circle(2, "white", "LightGray", 2);
                //set the position to a random spot
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

            //creates the lightpoles/buildings using a loop
            for (var i = 0; i < 7; ++i) {
                //sets the height of the buildings
                var buildingHeight = 300;
                //draws the lightpole using a bitmap
                var building = draw.bitmap("img/pole.png");
                //sets the x position using an iteration
                building.x = 500 * i;
                //sets the y to let the pole touch the ground
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Parallax

            //uses a loop to make the buildings move to appear as the player is moving forward
            for (var i = 0; i < buildings.length; i++) {
                //gets each building
                var eachElement = buildings[i];
                //moves it to the left
                eachElement.x -= 0.25;
                //sends it back to the start if it goes offscreen
                if (eachElement.x < -300){
                    eachElement.x = canvasWidth+100;
                }
                // code to do something with each element
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
