const {NotImplementedError} = require ('../extensions/index.js');

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
function deleteDigit (n) {
  let arrN = n.toString ().split ('');
  return arrN.reduce ((maxN, digit, index) => {
    let arrCurrentN = arrN.slice ();
    let spliceIndex = arrCurrentN.splice (index, 1);
    let currentN = +arrCurrentN.join ('');

    // console.log (`max: ${maxN}  currentN ${arrCurrentN} currentN  ${currentN}`);
    return maxN > currentN ? maxN : currentN;
  }, 0);
}

module.exports = {
  deleteDigit,
};
