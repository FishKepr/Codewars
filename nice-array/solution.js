'use strict';

//This function accepts a string with a first and last name
//It extracts the first initial and last initial
//it coverts them to uppercase and return them with a '.' in between.

function isNice(arr){
    if (arr.length>0) {
      let arrIsNice = true;
      for (let i=0; i<arr.length;i++) {
        if (!arr.includes(arr[i]+1) && !arr.includes(arr[i]-1)) {
          arrIsNice = false;
        }
      }
      return arrIsNice;
    } else {
      return false;
    }
}

console.log('Check1:  '+ isNice([2,10,9,3])); //
console.log('Check2:  '+ isNice([3,4,5,7])); //