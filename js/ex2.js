// Ex2

const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference() { // Description
    return 2 * Math.PI * r; // Formula
  },
  area() {
    return Math.PI * Math.pow(r, 2);
  }
};

// 'It's a function that takes an object as a parameter.'
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
