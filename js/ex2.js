// Ex 2
// An array of numbers 1 - 10
const progArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// An array of odd numbers
const oddNumbers = (progArray.filter(num => num % 2 !== 0))
console.log("Array of odd numbers: " + oddNumbers);

// An array of numbers divisible by 2 or 5
const divBy2or5 = progArray.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Array divisible by 2 or 5: " + divBy2or5);

// An array of numbers divisible by 3 squared (square the numbers that are divisible by 3)
const divBy3sqrd = progArray.filter(num => num % 3 === 0).map(num => Math.pow(num,2));
console.log("Array divisible by 3 squared: " + divBy3sqrd);

// The sum of the following: square the numbers divisible by 5
const divby5sum = progArray.filter(num => num % 5 === 0).map(num => Math.pow(num,2)).reduce((sum, x) => sum + x, 0);
console.log("Sum of the numbers divisible by 5 squared: " + divby5sum); 
// 25 + 100 = 125