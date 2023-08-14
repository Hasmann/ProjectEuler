// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit
// numbers.
function isPalindromeNumber(number) {
  const numString = String(number);
  const reversedString = numString.split("").reverse().join("");
  return numString === reversedString;
}

function findLargestPalindromeProduct() {
  let largestPalindromeProduct = 0;

  for (let factor1 = 999; factor1 >= 100; factor1--) {
    for (let factor2 = 999; factor2 >= 100; factor2--) {
      const product = factor1 * factor2;
      if (product <= largestPalindromeProduct) {
        break; // No need to check further if product is smaller than the largest palindrome product found
      }
      if (isPalindromeNumber(product) && product > largestPalindromeProduct) {
        largestPalindromeProduct = product;
      }
    }
  }

  return largestPalindromeProduct;
}

const largestPalindrome = findLargestPalindromeProduct();
console.log("The largest palindrome is:", largestPalindrome);
