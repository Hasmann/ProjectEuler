// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
// What is the 10,001st prime number?

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let divisor = 5; divisor * divisor <= num; divisor += 6) {
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
  }

  return true;
};

const findNthPrime = (n) => {
  if (n === 1) return 2;

  let count = 1;
  let number = 3;

  while (count < n) {
    if (isPrime(number)) {
      count++;
    }
    if (count === n) {
      return number;
    }
    number += 2;
  }
};

const nthPosition = 10001;
const nthPrimeNumber = findNthPrime(nthPosition);
console.log(`The ${nthPosition}st prime number is ${nthPrimeNumber}`);

// This code primarily has two functions: one will check if a number isa prime number,
// and the other function will find out the prime number at a specific position.
// It uses a smart method to determine if a number is prime by considering its divisors.
// The main part of the code aims to find the 10,001st prime number and then displays it.
// to conclude, the code is supposed to accurately calculate and print the prime number at the requested position.
