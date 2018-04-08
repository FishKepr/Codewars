'use strict';

//This function validates that a username contains lowercase letters, number or an underscore, and is between 4 and 16 characters in length.

function formatWords(words) {
  if (!Array.isArray(words)) return  '';
  
  words = words.filter(word => word);
  if (words.length === 0) return '';
    
  if (words.length === 1) {
      return words[0];
    } else {
      let last = words[words.length - 1];
      words.splice(words.length - 1, 1)
      return words.join(', ') + ' and ' + last;
  }
}

//This passed the rest of the actual tests in CodeWars.
console.log('Check1:  '+ formatWords(['Dog', 'Cat','','Bird','Mouse']));