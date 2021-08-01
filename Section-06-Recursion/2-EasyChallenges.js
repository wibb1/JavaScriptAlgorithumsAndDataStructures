// POWER
// Write a function called power which accepts a base and an exponent.  The function should return the power of the base to the exponent.  This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

const power = (base, exp) => {
  if (exp < 1) return 1;
  return base * power(base, exp - 1);
};

console.log(
  power(2, 0), // 1
  power(2, 2), // 4
  power(2, 4) // 16
);

// =================================================================
//FACTORIAL

// Write a function *factorial* which accepts a number and returns the factorial of that number.

const factorial = (num) => {
  if (Math.abs(num) < 2) return 1;
  return num * factorial(Math.abs(num) - 1);
};

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

// Product of Array
// Write a function called [productOfArray] which takes in an array of numbers and returns the product of them all

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(
  productOfArray([1, 2, 3]), // 6
  productOfArray([1, 2, 3, 10]) // 60
);


// =================================================================
//Recursive range sum

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (num) => {
  if (num < 2) return 1;
  return num + recursiveRange(num - 1);
};

console.log(
  recursiveRange(6), // 21
  recursiveRange(10) // 55
);

// =================================================================
// Fibonacci sequence

// Write a recursive function called fib which aceepts a number and returns the nth number in the Fibonacci sequence.  The Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8,... which starts with 1 and 1 and follows the patter of adding the last wo numbers to arrive at the next.

const fib = (num) => {
  let arr = [1, 1];
  num -= 2;

  const calcFib = (arr) => {
    arr.push(arr[0] + arr[1]);
    arr=arr.slice(1);
    num--;
    if (num === 0) return arr[1];
    return calcFib(arr);
  };

  return calcFib(arr);
};

console.log(
  fib(4), // 3
  fib(10), // 55
  fib(28), // 317811
  fib(35) // 9227465
);

// ***************************************************
// His solution was much better than mine!
// by forgoing the array he was able to remove most of the complexity
// did not think of the possiblity of having two recursions in the same statement

const fibHis = (n) => {
  if (n<=2) return 1
  return fib(n-1)+fib(n-2);
}

console.log(
  fibHis(4), // 3
  fibHis(10), // 55
  fibHis(28), // 317811
  fibHis(35) // 9227465
);