var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; //variable to hold a single circle when creating circles / iterating
        var circles = []; //variable to store all circles in one array

        // TODO 2 : Create a function that draws a circle 

        //function run to draw each circle created
        function drawCircle(){
            //code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // creates the properties of the circle using an already existing draw function. stores the output as the variable circle
            physikz.addRandomVelocity(circle, canvas, 10, 10); // uses the physikz library to set the velocity of the circle to a random number
            view.addChild(circle); // adds the circle to view so the user can see it
            circles.push(circle); //adds the circle to the circles array by pushing it to the end
        }

        // TODO 3 / 7 : Call the drawCircle() function 

        //loop through 100 times and draw a circle for every loop
        for (var i = 0; i<100; i++){
            drawCircle()
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //

            //create a loop and do it 100 times, each time updating a circles position using the physikz library
            for (var i = 0; i<100; i++){
                physikz.updatePosition(circles[i])
            }
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.

            //loops through all of the circles, checking the circles to see if they are within the set boundrais
            for (var i = 0; i<100; i++){
                game.checkCirclePosition(circles[i])
            }

            // TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

             //if the left side of the circle has gone off the right side of the screen, then the right side of the circle will be set to the left borders position
            if ( circle.x - circle.radius > canvas.width ) {
                circle.x = -circle.radius;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////

            //if the right side of the circle has gone off the left side of the screen, then the left side of the circle will be set to the right borders position
            if( circle.x + circle.radius < 0) {
                circle.x = canvas.width + circle.radius;
            }
            //if the bottom of the circle has gone off the top of the screen, then the top of the circle will be set to the bottom borders position
            if ( circle.y - circle.radius > canvas.height) {
                circle.y = -circle.radius;
            }
             //if the top of the circle has gone off the bottom of the screen, then the bottom of the circle will be set to the top borders position
            if ( circle.y + circle.radius < 0) {
                circle.y = canvas.height + circle.radius;
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
