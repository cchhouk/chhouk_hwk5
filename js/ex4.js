// Ex4

let wordbreak = "stop";
const wordCount = [];
let myCount = 0;

function checkWord() {
  while (myCount >= 0) {
    let word = prompt(`Enter your word or "stop" to close: `);

    if (word.toLowerCase() === wordbreak && myCount === 0) {
      console.log("No words to display, Stop was the first word entered.")
      break; // Exit if Stop entered first. 
    } else if (word.toLowerCase() === wordbreak && myCount !== 0) {
      console.log("You entered the following words: ");
      for (let i = 0; i < wordCount.length; i++) {
        console.log(wordCount[i]);
      } break;
    } else {
      wordCount.push(word); // Add word to array
      myCount++; // Add to count in order to give word a position in the array
    }
  }
}

checkWord();

// Prototype 3
/*
let wordBreak = "stop";
let word = "";
const guesses = [];

function checkWord() {
  while (word.toLowerCase() !== wordBreak) {
    let word = prompt("Please enter a word: ");
    guesses.push(word);
    if (word === wordBreak && guesses.length < 1) {
      console.log(`No words to display, Stop was the first word entered.`);
    } else (word === wordBreak && guesses.length > 1); {
      console.log(`You entered the following words ${guesses.slice(0, -1)}`);
    }
  }
}

checkWord();
*/

// Prototype 2
/*
let word = "";
let wordBreak = "stop";
const guesses = [];

while (word.toLowerCase() !== wordBreak) {
  word = prompt("Please enter a word: ");
  guesses.push(word);
} // guesses(i - last position or pop last position)

console.log(`You entered the following words ${guesses.slice(0,-1)}`);
*/

// Prototype 1 
/*
let word = "";
let wordBreak = "stop";
const guesses = [];

while (word.toLowerCase() !== wordBreak) {
  word = prompt("Please enter a word: ");
  guesses.push(word);
}

console.log(guesses); 
*/

