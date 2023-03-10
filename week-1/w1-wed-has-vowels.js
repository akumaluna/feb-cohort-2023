/*

Has Vowel
Write a function hasVowel(str) that takes in a string.
The function should return a boolean, true if the string contains at least one vowel, false otherwise.
Vowels are the letters a, e, i, o, u.

*/

let vowels = 'aiueo';
function hasVowel(word){
  for (i = 0; i <= word.length; i++) {
	let letter = word[i];
  	if (vowels.includes(letter)) return true;
  }
  return false;
};





console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
