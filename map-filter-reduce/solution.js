'use strict';

//This function accepts an array and returns it with each value doubled.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
    return array.map(x => x * 2)
}
console.log('Check1:  '+ double([1, 2, 3])); // 2, 4, 6
console.log('Check2:  '+ double([10, 20, 30])); // 20, 40, 60
console.log('Check3:  '+ double([15, 25, 35])); // 30, 50, 70
console.log('Check4:  '+ double([100, 200, 300])); // 200, 400, 600
console.log('Check5:  '+ double([150, 250, 350])); // 300, 500, 700

//This function returns a new array with the strings filtered out.
function filter_list(l) {
    return l.filter(x => Number.isInteger(x));
}
console.log('Check1:  '+ filter_list([1,2,'a','b']),[1,2]); //
console.log('Check2:  '+ filter_list([1,'a','b',0,15]),[1,0,15]); // 
console.log('Check3:  '+ filter_list([1,2,'aasf','1','123',123]),[1,2,123]); // 

//This function Returns the average of an array
function find_average(array) {
    let total = array.reduce((sumTotal , x) => sumTotal + x);
    return total/array.length;
}
console.log('Check1:  '+ find_average([1,1,1]), 1); //
console.log('Check2:  '+ find_average([1,2,3]), 2); //