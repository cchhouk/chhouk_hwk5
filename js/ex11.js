let x = 7;
let y = 8;

function myFunction(x) {
    console.log(`x = ${x}`);
    x = 10;
    return x;
    
}

console.log(`x = ${x}`);  // 'x = 7'
console.log(`y = ${y}`); // 'y = 8'
x = myFunction(y); // 'x = 8' is the output and then x becomes 10 and returns it to the variable
console.log(`x = ${x}`); // 'x = 10'
