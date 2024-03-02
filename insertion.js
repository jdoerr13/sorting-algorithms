function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {//start at beginning
      let currentVal = arr[i];// making sure the value is not lost in the process. 
      let j;// keep track of current position being composted and facilitat shifting  of elements 
      for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {//start as 0 (1-1), j-- moves backwards to make space for insertion bc starts from i-1.
        arr[j + 1] = arr[j];//makes the shift possible without losing the currentVal variable
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }



module.exports = insertionSort;