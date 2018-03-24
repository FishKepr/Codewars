'use strict';

//This function validates that a username contains lowercase letters, number or an underscore, and is between 4 and 16 characters in length.

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}

//This passed the rest of the actual tests in CodeWars.
console.log('Check1:  '+ validateUsr('asddsa')); //
console.log('Check2:  '+ validateUsr('a')); //
console.log('Check3:  '+ validateUsr('Hass')); //