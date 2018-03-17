'use strict';

//This function accepts a string with a first and last name
//It extracts the first initial and last initial
//it coverts them to uppercase and return them with a '.' in between.

function abbrevName(name){
    let firstInitial = name.substring(0,1);
    let spacePos = name.indexOf(' ');
    spacePos++
    let lastInitial = name.substr(spacePos, 1);
    
    return(`${firstInitial.toUpperCase()}.${lastInitial.toUpperCase()}`);
 
 }
console.log('Check1:  '+ abbrevName('starlight glimmer')); //
console.log('Check2:  '+ abbrevName('Twilight Sparkle')); //
console.log('Check3:  '+ abbrevName('pinkie pie')); //
console.log('Check4:  '+ abbrevName('rainbow Dash')); //