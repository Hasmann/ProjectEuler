// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

const greatestCommonDivisor = (a, b) =>
  b === 0 ? a : greatestCommonDivisor(b, a % b);

const leastCommonMultiple = (a, b) => (a * b) / greatestCommonDivisor(a, b);

const findSmallestMultiple = (limit) => {
  let smallestMultiple = 1;
  for (let number = 2; number <= limit; number++) {
    smallestMultiple = leastCommonMultiple(smallestMultiple, number);
  }
  return smallestMultiple;
};

const smallestDivisibleNumber = findSmallestMultiple(20);
console.log(smallestDivisibleNumber);
