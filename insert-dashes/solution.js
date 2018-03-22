'use strict';

//This function accepts a numeric value
//When it encounters two odd numbers in sequence, it inserts a '-' between them.

function insertDash(num) {
    let result = '';
    let a = num.toString();
    for (let i = 0; i < a.length; i++){
      let first = a.substr(i,1);
      let second = a.substr(i+1, 1);
      if(isOdd(parseInt(first)) && isOdd(parseInt(second))){
        result = result + first + '-';
      }else{ 
        result = result + first;
      }
    }
   return result;
 }
 
 function isOdd(n) {
 return Math.abs(n % 2) == 1;
 }
 
console.log('Check1:  '+ insertDash(454793)); //
console.log('Check2:  '+ insertDash(123456)); //
console.log('Check3:  '+ insertDash(1003567)); //