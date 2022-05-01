const {NotImplementedError} = require ('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const log2 = 0.693;

function dateSample (sampleActivity) {
  if (
    typeof sampleActivity !== 'string' ||
    isNaN (Number (sampleActivity)) ||
    (Number (sampleActivity) <= 0 || Number (sampleActivity) > 15) ||
    Number (sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  return Math.ceil (
    Math.log (MODERN_ACTIVITY / sampleActivity) / log2 * HALF_LIFE_PERIOD
  );
}

module.exports = {
  dateSample,
};
