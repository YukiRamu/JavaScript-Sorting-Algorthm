/* This program evaluates if a given number is a prime number or not and
// also generate random prime numbers
// The logic is...
// Is the number 2 => Yes, then it IS a prime number
// Is the number less than 2? (0 or 1) => Yes, then it is not a prime number
// Is the number even except for 2? => Yes, then it is not a prime number
// 
// Validation check covers...
// is the number integger? => No then it is not a prime number
*/
//export 2 functions
export const isPrime = (number) => {

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
    counter += counter;
    //if the remainder is 0, it is not a prime number i.e 9 % 3 --> 9 % 9
    if (number % i === 0) {
      return false; //not a prime
    }
  }
  //all other numbers are prime numbers
  return counter, true;
}

/* =========== Push all prime numbers into an array ============= */
export const primeNumGenerator = (end) => {
  let primeNumArray = [];
  for (let num = 0; num < end; num++) {
    if (isPrime(num)) {
      primeNumArray.push(num);
    }
  }
  console.log(primeNumArray);
  return primeNumArray
}
//primeNumGenerator(101) //specify the end number here
