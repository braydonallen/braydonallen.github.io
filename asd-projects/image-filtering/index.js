// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  smudgeImage();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var i in image){
    for (var v in image[i]){
      var rgbString = image[i][v]
      var rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][v] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0]
  for (var i in image){
    for (var v in image[i]){
      if (image[i][v] !== backgroundColor){
        var rgbString = image[i][v]
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers)
        image[i][v] = rgbString;
      }
    }
  }
}

console.log(image[0][0])

// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  return(Math.min(Math.max(num, 0), 255))
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED] = 200
}


// TODO 6: Create more filter functions
function decreaseBlue(arr){
  arr[BLUE] = keepInBounds(arr[BLUE] - 50)
}

function increaseGreenByBlue(arr){
  arr[GREEN] = keepInBounds(arr[BLUE] + arr[GREEN])
}

// CHALLENGE code goes below here
function smudgeImage(){
  for (var i in image){
    for (var v in image[i]){
      var neighborNum = rgbStringToArray(image[i+1][v])
      var rgbNumbers = rgbStringToArray(image[i][v])
      rgbNumbers[RED] = keepInBounds(rgbNumbers[RED] + (math.max(rgbNumbers[RED], neighborNum[RED]) - math.min(rgbNumbers[RED], neighborNum[RED])));
      var rgbString = rgbArrayToString(rgbNumbers)
      image[i][v] = rgbString;
    }
  }
}
