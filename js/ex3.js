// Ex3

const values = [3, 11, 7, 2, 9, 10];

console.log(`Array is: ${values}`);

// Sum of all array values
let sum = 0;

for (let i = 0; i < values.length; i++) { // Goes through array
  sum += values[i]; // Adds all values
}

console.log(`The sum is ${sum}`); // 42


// Minimum value
let min = values[0]

for (let i = 0; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i]
  }
}

console.log(`The min is ${min}`); // 2

// Maximum value
let max = values[0]; 

for (let i = 0; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i]
  }
}

console.log(`The max is ${max}`); // 11