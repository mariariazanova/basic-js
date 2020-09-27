//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var count = 0;
  for (i=0; i<matrix.length; i++) {
     for (j=0; j<matrix[i].length; j++) {
         if (matrix[i][j] == '^^')
            count++;
     }
  } 
  return count;         
};
