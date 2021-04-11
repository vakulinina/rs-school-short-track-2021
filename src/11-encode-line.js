/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const letters = str.split('');
  const result = [];
  let count = 1;
  letters.forEach((letter, index) => {
    if (letter === letters[index + 1]) {
      count++;
    } else {
      if (count > 1) {
        result.push(`${count}${letters[index]}`);
      } else {
        result.push(`${letters[index]}`);
      }
      count = 1;
    }
  });
  return result.join('');
}

module.exports = encodeLine;
