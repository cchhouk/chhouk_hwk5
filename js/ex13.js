const foods = ["Pizza", "Burger", "Hot Dog", "Taco"];

console.log(foods.length); // 4
console.log(foods[2]); // 'Hot Dog'
console.log(foods[4]); // No value

console.log("==================")

foods.push("Lasagna");
console.log(foods[4]); // 'Lasagna'

console.log("==================")

foods.unshift("Chicken");
console.log(foods[0]); // 'Chicken'

console.log("==================")

foods.pop(); // Removes Chicken

foods.splice(1,3); // Remove 3 elements before index 1
console.log(foods.length);
console.log(foods[1]); // Taco
