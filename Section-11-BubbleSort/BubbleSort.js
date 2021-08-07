// There two ways to swap in JavaScript

// ES5 method
function swapES5(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swapES2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble Sort Notes
// inputs are an array to be sorted
// Create variables called i, count
// Start a while loop that loops while count>0
// Set count to 0
// iterate through the values in the array
// check if arr[i] > arr[i+1] - if true then swap the values and add 1 to count
// increment i by 2 to go to the next pair
// if (arr[i] < arr[i+1]) swapES2015(arr, arr[i], arr[i+1])
// i += 2
// return the sorted arr at the end

const myBubbleSort = (arr) => {
  let count,
    end = 0;
  do {
    count = 0;
    for (let i = 0; i < arr.length - end; i++) {
      if (arr[i] > arr[i + 1]) {
        swapES2015(arr, i, i + 1);
        count++;
        end++;
      }
    }
  } while (count > 0);
  return arr;
};

console.log(myBubbleSort([6, 4, 15, 10]));

const hisBubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
};

const hisImprovedBubbleSort = (arr) => {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
};

const his2015BubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES2015(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const hisOptimizedBubbleSort = (arr) => {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES2015(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
