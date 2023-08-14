// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
/////
/////
/////
const MultiplesOf3and5 = (threshold) => {
  let sum = 0;

  for (let number = 3; number < threshold; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }

  return sum;
};

const threshold = 1000;
const sum = MultiplesOf3and5(threshold);
console.log(`The sum of multiples of 3 or 5 below ${threshold} is: ${sum}`);

// This code defines the limit-accepting function MultiplesOf3and5.
// It initialises a variable sum to track multiples. The loop loops from 3 to limit -1 before ending.
// The modulus operator% will add the numbers that are multiples of 3 or 5.
// The function returns the sum of all three- or five-multiples below the limit.
// With a limit of 1000, this code will return and reports the sum of all 3 or 5 multiples below 1000.
