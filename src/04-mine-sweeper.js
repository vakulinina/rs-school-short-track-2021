/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((currentRow, currentRowIndex) => currentRow.map((mine, currentColumnIndex) => {
    const previousRow = matrix[currentRowIndex - 1];
    const nextRow = matrix[currentRowIndex + 1];
    const previousColumnIndex = currentColumnIndex - 1;
    const nextColumnIndex = currentColumnIndex + 1;
    let count = 0;

    if (previousRow) {
      if (previousRow[previousColumnIndex]) {
        count++;
      }
      if (previousRow[currentColumnIndex]) {
        count++;
      }
      if (previousRow[nextColumnIndex]) {
        count++;
      }
    }

    if (currentRow[previousColumnIndex]) {
      count++;
    }
    if (currentRow[nextColumnIndex]) {
      count++;
    }

    if (nextRow) {
      if (nextRow[previousColumnIndex]) {
        count++;
      }
      if (nextRow[currentColumnIndex]) {
        count++;
      }
      if (nextRow[nextColumnIndex]) {
        count++;
      }
    }

    return count;
  }));
}

module.exports = minesweeper;
