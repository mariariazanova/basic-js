//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  
  if (Array.isArray(members)){
    for (let i = 0; i < members.length; i++){
      if (typeof members[i] === "string"){
        dreamTeam.push(members[i].trim().toUpperCase()[0]);
      }
    }
    if (dreamTeam != []){
      return dreamTeam.sort().join("");
    } else {
      return false
    }
  } else {
    return false;
  }
  
  
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
