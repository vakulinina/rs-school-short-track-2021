/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let totalSum = matrix[0].reduce((acc, value) => acc + value);
  if (matrix.length < 2) return totalSum;
  for (let i = 1; i < matrix.length; i++) {
    totalSum += matrix[i].reduce((acc, value, index) => {
      if (matrix[i - 1][index] !== 0) {
        return acc + value;
      }
      return acc;
    }, 0);
  }
  return totalSum;
}

module.exports = getMatrixElementsSum;
