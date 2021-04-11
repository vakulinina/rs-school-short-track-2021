/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let biggestNum = Number(digits.slice(1).join(''));
  for (let i = 1; i < digits.length; i++) {
    const currentDigits = [...digits];
    currentDigits.splice(i, 1);
    const currentNum = Number(currentDigits.join(''));
    if (currentNum > biggestNum) {
      biggestNum = currentNum;
    }
  }
  return biggestNum;
}

module.exports = deleteDigit;
