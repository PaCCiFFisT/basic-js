

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var sampleAct = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string' || typeof parseFloat(sampleActivity) != 'number' || isNaN(sampleAct) || sampleAct <= 0 || sampleAct > MODERN_ACTIVITY) {
    return false;
  } else {
    var age = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)
    return Math.ceil(age)
  }
};
