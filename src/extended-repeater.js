module.exports = function repeater( str, options ) {

  let result = '';
  let additionSeparator = '|';
  let separator = '+';
  
  if (typeof str != "string") {
    str = str + "";
  };

  //if (typeof options.addition != "string") {
  //  options.addition = options.addition + "";
  //};

  if(options.addition === undefined){
      options.addition = '';
  };
  if(options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  };
  if(options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  };
  if (options.additionSeparator) {
      additionSeparator = options.additionSeparator;
  };
  if (options.separator) {
      separator = options.separator;
  };


  for (let i = 1; i<=options.repeatTimes; i++) {
    result += str;
    for (let j = 1; j<=options.additionRepeatTimes; j++) {
      result += options.addition;
      if(j < options.additionRepeatTimes) result += additionSeparator;
    };
    if(i < options.repeatTimes) result += separator;
  }

  return result;
};
  