module.exports = function getSeason(date) {
  if (date === undefined) { //дата не введена
    return 'Unable to determine the time of year!'
  }
  if (isNaN(date)) { //дата не валидна
    throw new Error()
  } 
  var monthNumber = date.getMonth(); //возвращает номер месяца
  if (monthNumber < 2 || monthNumber == 11) {
    return "winter"
  } else 
      if (monthNumber >=2 && monthNumber < 5) {
        return "spring"
      } else 
          if (monthNumber >=5 && monthNumber < 8) {
            return "summer"
          } else 
              if (monthNumber >=8 && monthNumber < 11) {
                return "fall"
              }
};