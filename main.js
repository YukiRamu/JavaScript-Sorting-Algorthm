/* JavaScript Sorting Algorithm */
/* Create Test Data */

/* Bubble sort*/
//swap the left number with the right number
//if the left number is greater than the right number
const exampleArray = [3, 6, 2, 11, 1];

const bubbleSort = (array) => {
  //array.length -1 : because when i gets to the second from the last, j and j+1 will be compared.
  for (let i = 0; i < array.length - 1; i++) {
    //array.length-i-1 : because when j gets to the third from the last, j + 2 (the last number) is already the highest number. (at the first iteration when i = 0, j will get to up until the second from the last position)
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return exampleArray;
}
bubbleSort(exampleArray);
console.log("Result of bubble sort is " + exampleArray);

/* Selection sort */
//find the minimum number and exchange it with the number in the smallest index
const exampleArray2 = [3, 6, 2, 11, 1];
let indexOfMinNum;
let minNum;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    indexOfMinNum = i;
    //find the minimum number
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMinNum]) {
        indexOfMinNum = j;
      }
    }
    //swap if index of mim is changed
    if (indexOfMinNum !== i) {
      let tempMin = array[indexOfMinNum];
      array[indexOfMinNum] = array[i];
      array[i] = tempMin;
    }
  }
  return exampleArray2;
}
selectionSort(exampleArray2);
console.log("Result of selection sort is " + exampleArray2);


// minNum = array.reduce((a, b) => {
//   if (a < b) {
//     minNum = b;
//   }
// })