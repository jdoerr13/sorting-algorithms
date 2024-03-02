function merge(arr1, arr2) {//MUST BE SORTED
    //NO NESTED LOOPS
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++; //moves to the next item in array
      }
    }
  
  //ONLY ONE OF THE BELOW WILL EVER RUN
    while (i < arr1.length) {//push remaining values not compared at end
      results.push(arr1[i]);
      i++;//prevents the infanite loop
    }
    while (j < arr2.length) {//push remaining values not compared at end
      results.push(arr2[j]);
      j++;
    }
  
    return results;
  }
  
  function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
  
    const left = mergeSort(arr.slice(0, mid));//see diagram
  
    //this won't run unill 
    const right = mergeSort(arr.slice(mid));//see diagram
    return merge(left, right);//KEY POINT: WILL RUN ON THE FIRST TWO ITEMS OF THE ARRAY
  }
  

module.exports = { merge, mergeSort};