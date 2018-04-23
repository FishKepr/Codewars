'use strict';

//This function accepts an string, one with a series of words with all lowercase letters.
//It scores each word by letter value (a=1, b=2, etc) and returns the highest scoring word.

function high(x){
    let scoreArray = [];
    let highWord = '';
    let highScore = 0;
    let splitArray = x.split(' ');
    splitArray.forEach(function(word) {
    let wordValue = getWordValue(word);
    scoreArray.push(wordValue);
    });
    for (let i=0; i<scoreArray.length; i++) {
      if (scoreArray[i] > highScore) {
        highScore = scoreArray[i];
        highWord = splitArray[i];
      }
    }
    return highWord;
  }
  
  function getWordValue(word) {
    let wordValue = 0;
    for (let i=0; i<word.length;i++) {
    wordValue += (word.charCodeAt(i)-96);
    }
    return wordValue;
  }
  
console.log('Check1:  '+ high('man i need a taxi up to ubud'), 'taxi'); //
console.log('Check2:  '+ high('what time are we climbing up the volcano'), 'volcano'); //
console.log('Check3:  '+ high('take me to semynak'), 'semynak'); //