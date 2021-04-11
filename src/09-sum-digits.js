/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} number
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  if (number.toString().length === 1) return number;

  return getSumOfDigits(number.toString().split('').reduce((acc, value) => +value + acc, 0));
}

module.exports = getSumOfDigits;
