function bubbleSort(arr) {
    let count = 0;
    for (let i = arr.length; i > 0; i--) { // Updated outer loop
      let swapped = false;
      for (let j = 0; j < i - 1; j++) { // Adjusted to avoid checking the already sorted part
        count++;
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp; // This is the swap!
          swapped = true; // Telling the computer that a swap occurred
        }
      }
      if (!swapped) break; // Exit early if no swaps occurred in the last pass
    }
    console.log("TOTAL COUNT:", count);
    return arr;
  }

module.exports = bubbleSort;