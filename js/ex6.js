// Ex6

randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum); // Check random number
let count = 0;

function checkNum() {
  while (count >= 0) {
    let userNum = Number(prompt("Please enter a number between 1 and 100: "));
    if (userNum < 1 || userNum > 100 || isNaN(userNum)) { // Validator
      console.log(`Please enter a valid number`);
      break;
    } if (userNum === randomNum) {
      console.log(`Correct! It took you ${count} attempts to guess the correct number.`);
      break;
    } else {
      count++ // Increment guesses 
      if (userNum < randomNum) { // Verification
        console.log("Number too low, guess again.");  
      } else if (userNum > randomNum) {
        console.log("Number too high, guess again.");
      }
    }
  }
}

checkNum();

/*
for (count = 0; userNum !== randomNum; count++) {
  if (userNum < randomNum) {
    console.log("Too low, guess again");
  } else if (userNum > randomNum) {
    console.log("Too high, guess again");
  } else console.log(`Correct! It took you ${count} attempts to guess the correct number.`)
}
*/


// number is a variable using the variable 

// console.log(the acutal number)

// Loop - if number is too high, guess again
// Add to counter

// OR 

// If number is too low, guess again, 
// Add to counter

