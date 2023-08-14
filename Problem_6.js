//this problem after carrying out research is based on project euler, lattice paths,
//after carrying out research on several blogs and stack overflow, i have come up with this solution, and hopefully, it is accurate as possible

const memo = new Map();

const calculateFactorial = (n) => {
  if (memo.has(n)) return memo.get(n);

  let result;
  if (n <= 1) {
    result = 1;
  } else {
    result = n * calculateFactorial(n - 1);
  }

  memo.set(n, result);
  return result;
};

const calculateBinomialCoefficient = (n, k) => {
  return (
    calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n - k))
  );
};

const countLatticePaths = (gridSize) => {
  return calculateBinomialCoefficient(2 * gridSize, gridSize);
};

const gridSize = 20;
const numberOfPaths = countLatticePaths(gridSize);
console.log(
  `Number of paths in a ${gridSize}x${gridSize} grid: ${numberOfPaths}`
);
