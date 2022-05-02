const {NotImplementedError} = require ('../extensions/index.js');

/**
 * getCommonCharacterCount('aabcc', 'adcaa') => 3
**/

function getCommonCharacterCount (s1, s2) {
  let s1Arr = s1.split ('').sort ();
  let s2Arr = s2.split ('').sort ();
  let cointCommonLetters = s1Arr.reduce ((coint, letter) => {
    let indexCommon = s2Arr.indexOf (letter);
    if (indexCommon !== -1) {
      s2Arr.splice (indexCommon, 1);
      coint++;
    }
    return coint;
  }, 0);

  return cointCommonLetters;
}

module.exports = {
  getCommonCharacterCount,
};
