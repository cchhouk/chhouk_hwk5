let x = 7;

function myFunction(x) {
    x = 10;
    return x;
    console.log(`x = ${x}`);
}

console.log(`x = ${x}`); // x = 7 
x = myFunction(x); // No output since hte return is before the console.log 
console.log(`x = ${x}`); // x = 10
