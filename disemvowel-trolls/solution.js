'use strict';

//This function accepts a string and returns it with vowels removed.

function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
  }

console.log('Check1:  '+ disemvowel("This website is for losers LOL!")); //