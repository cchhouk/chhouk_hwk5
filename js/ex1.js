// Ex1

function calculator() {
  let userNumber1 = Number(prompt("Please enter Number 1: "));
  let userNumber2 = Number(prompt("Please enter Number 2: "));
  let mathOp = prompt("Please enter a Mathematical Operation (+,-,*,/): ");
  let calculation = Number();

  if (isNaN(userNumber1) || isNaN(userNumber2)) { // Num validator 
    console.log(`You did not enter a valid number(s).`);
  } else if (mathOp === "+") {
    let calculation = userNumber1 + userNumber2;
    console.log(`${userNumber1} + ${userNumber2} = ${calculation}`)
  } else if (mathOp === "-") {
    let calculation = userNumber1 - userNumber2;
    console.log(`${userNumber1} - ${userNumber2} = ${calculation}`);
  } else if (mathOp === "*") {
    let calculation = userNumber1 * userNumber2;
    console.log(`${userNumber1} * ${userNumber2} = ${calculation}`);
  } else if (mathOp === "/") {
    let calculation = userNumber1 / userNumber2;
    console.log(`${userNumber1} / ${userNumber2} = ${calculation}`);
  } else {
    console.log(`You did not enter a valid operation.`);
  }
}

calculator(); // Call on function. 

// Brainstorm
/* 
 if mathematical operation is one of the inputs then use that operator to do the claculation of the number. set that number into a new variable.

 then print, Number1 (mathOp) Number "=" OutPut
*/

// Prototype 1
/*
let userNumber1 = Number(prompt("Please enter Number 1: "));
let userNumber2 = Number(prompt("Please enter Number 2: "));
let mathOp = prompt("Please enter a Mathematical Operation (+,-,*,/): ");
let calculation = Number();

if (mathOp === "+") {
  let calculation = userNumber1 + userNumber2; 
  console.log(`${userNumber1} + ${userNumber2} = ${calculation}`)
} else if (mathOp === "-") {
  let calculation = userNumber1 - userNumber2;
  console.log(`${userNumber1} - ${userNumber2} = ${calculation}`);
} else if (mathOp === "*") {
  let calculation = userNumber1 * userNumber2;
  console.log(`${userNumber1} * ${userNumber2} = ${calculation}`);
} else if (mathOp === "/") {
  let calculation = userNumber1 / userNumber2;
  console.log(`${userNumber1} / ${userNumber2} = ${calculation}`);
} else {
  console.log(`You did not enter a valid operation.`);
}
*/