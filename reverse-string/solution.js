'use strict';

//This function accepts a string and reverses it.

function solution(str){
  return str.split('').reverse('').join('');
}

//This passed the rest of the actual tests in CodeWars.
console.log('Check1:  '+ solution('Twilight Sparkle'));
console.log('Check2:  '+ solution('Pinkie Pie'));
console.log('Check3:  '+ solution('Rainbow Dash'));
console.log('Check4:  '+ solution('Starlight Glimmer'));
