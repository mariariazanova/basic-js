//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) {
  if (typeof SAMPLE_ACTIVITY !== 'string' || parseFloat(SAMPLE_ACTIVITY) <= 0 || parseFloat(SAMPLE_ACTIVITY) > MODERN_ACTIVITY || isNaN(parseFloat(SAMPLE_ACTIVITY)) || ! SAMPLE_ACTIVITY  ) {
      return false;
  } else {
  SAMPLE_ACTIVITY = parseFloat(SAMPLE_ACTIVITY);

  const age = Math.ceil((Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY))/(0.693/HALF_LIFE_PERIOD));
  return age;
  }
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
