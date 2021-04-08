/* JavaScript Sorting Algorithm */
/* Create Test Data */
//Prime number
//variable declaration
let primeNumArray = [];
// import {primeNumGenerator} from "./prime.js";
// primeNumGenerator(101);

const isPrime = (number) => {

  if (number === 2) {
    return true; //prime
  }

  if (!Number.isInteger(number) || number < 2 || ((number % 2) === 0)) {
    //not number, 0 or 1, even number
    return false; //not a prime
  }

  /* checking ONLY Odd numbers because even numbers are already covered
  // looping from 3 to number-1 becuase 2 is already covered
  // checking only less than square root of number
  // number(15) = x(3) * y(5)
  // x(3) <= y(5)
  // x(3) * x(3) <= x(3) * y(5)
  // x(3) * x(3) <= number(15)
  // x(2) <= square(number) : square(15)= 3.8727....
  //
  // for loop will be executed one more after it reaches to number-1
  */
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    //if the remainder is 0, it is not a prime number i.e 9 % 3 --> 9 % 9
    if (number % i === 0) {
      return false; //not a prime
    }
  }
  //all other numbers are prime numbers
  return true;
}

/* =========== Push all prime numbers into an array ============= */
const primeNumGenerator = (end) => {
  for (let num = 0; num < end; num++) {
    if (isPrime(num)) {
      primeNumArray.push(num);
    }
  }
  console.log(primeNumArray);
  return primeNumArray
}
primeNumGenerator(101) //specify the end number here

//TO Do List for Testing Data
//0. Give length of array as a parameter of primeNumGenerator
//1. primeNumArray needs to be random num array (not sorted one)
//2. Create a list with duplicated numbers
//3. Import and Export javascript files

//================================= Sorting Programs =============================//
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

/* Insertion sort */


//TO Do List for Sorting Program
//1. Sort the numbers in descending order
//2. Show how long the program takes to complete