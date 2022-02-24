let x = 7;

function myFunction(x) {
    x = 10;
    console.log(`x = ${x}`);
}

console.log(`x = ${x}`); // calling on itself so 'x = 7'
myFunction(x); // x changes to 10 so output is 'x = 10'
console.log(`x = ${x}`); // No function called so 'x = 7'
