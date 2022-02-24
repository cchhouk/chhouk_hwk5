// Ex5 

function wordProgram() {
  let word = prompt("Please enter a word:");
  let vowels = ["a", "e", "i", "o", "u"]; // Array for vowels
  let count = 0;
  let wordLC = word.toLowerCase() // Case insensitive. 

  for (let letter of word.toLowerCase()) { // Convert input to all lower case
    if (vowels.includes(letter)) { // Checks to see if vowels are in
      count++;
    }
  }

  let palindrome = "a palindrome."; 
  const len = word.length;

  for (let i = 0; i < len / 2; i++) {
    if (wordLC[i] !== wordLC[len - 1 - i]) // Use wordLC to bypass case sensitivity. 
      palindrome = "not a palindrome."; // Changes value of "palindrome" to "not a palindrome" if for loop is satisfied
  }
  output = word + " contains " + count + " vowel(s) and is " + palindrome;
  console.log(output);
  return output;
}

wordProgram();

// Prototype 1
/*
const vowels = ["a", "e", "i", "o", "u", "y"];
let word = prompt('Enter your word: ');

function isVowel(vowels, word) {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      result = true;
      break;
    }
  }
}
*/
