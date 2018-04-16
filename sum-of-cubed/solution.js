'use strict';

function cubeOdd(arr) {

    // insert code here >.<
    
    if (arr.some(isNaN)) {
    return undefined;
    } else {
    let cubedArray = arr.map(x => Math.pow(x,3));
    let filteredArray = cubedArray.filter(x => x % 2 !==0);
    if (filteredArray.length >0) {
        return filteredArray.reduce((sumTotal , x) => sumTotal + x);
    } else {
        return 0;
    }
    }
}
console.log('Check1:  '+ cubeOdd([1, 2, 3, 4]), 28); //
console.log('Check2:  '+ cubeOdd([-3,-2,2,3]), 0); //
console.log('Check3:  '+ cubeOdd(["a",12,9,"z",42]), undefined); //