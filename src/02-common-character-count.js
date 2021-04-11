/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} firstArr
 * @param {String} secondArr
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const firstArr = s1.split('');
  const secondArr = s2.split('');
  firstArr.forEach((letter) => {
    if (secondArr.includes(letter)) {
      result++;
      secondArr.splice(secondArr.indexOf(letter), 1);
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
