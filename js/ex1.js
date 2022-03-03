// Ex 1
class Square {
  constructor(side) { 
    this.side = Number(side);
    this.perimter = side * 4; 
    this.area = Math.pow(side,2); 
    this.diagonal = Math.sqrt(2 * Math.pow(side,2)); 
  }
  describe() { // Describe function
    return `Square with side ${this.side} has perimiter of ${this.perimter}, area of ${this.area}, and diagonal of ${this.diagonal}`;
  }
}

const square1 = new Square(2) // First square
console.log(square1.describe());

console.log("=====================") // Break

const square2 = new Square(3) // Second square
console.log(square2.describe());


console.log("=====================")

const square3 = new Square(4) // Third square
console.log(square3.describe());
