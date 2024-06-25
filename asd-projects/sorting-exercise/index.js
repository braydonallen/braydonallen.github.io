/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
    var i, j, temp;
    var swapped;
    for (var i = 0; i < array.length; i++) {
        swapped = false;
        for (var j = 0; j < (array.length - 1); j++) {
            if (array[j].value > array[j + 1].value) {
                console.log(array[j])
                console.log(array[j-1])
                swap(array, j, j+1)
                swapped = true
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
        if (swapped == false)
            break;
    }
}

// TODO 3: Implement quickSort

async function quickSort(array, left, right){
    if (left < right){
        var index = await partition(array, left, right);
        await quickSort(array, left, index - 1);
        await quickSort(array, index, right);
    }
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right){
    var pivot = array[Math.floor((right + left) / 2)];
    
    while (left <= right){
        while (array[left].value < pivot.value){
            left++;
        }
        while (array[right].value > pivot.value){
            right--;
        }
        if (left <= right){
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
            left++;
            right--;
        }
    }
    return left;
}


// TODO 1: Implement swap
function swap(array, i, j){
    var t = array[i]
    array[i] = array[j]
    array[j] = t

    console.log(array)

    drawSwap(array, i, j)
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}