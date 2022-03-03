anArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//	What is the output of the following?
console.log(anArray.filter(value => value % 2 === 0).map(x => x * 2));
// Filter by even. Then times each value by 2. 
// 0, 2, 4, 6, 8, 10
// Output = [0, 4, 8, 12, 16, 20]

//	Let's reorder the filter and map methods.  What is the output of the following?
console.log(anArray.map(x => x * 2).filter(value => value % 2 === 0));
// Times array by 2
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// Filter by those diviblse by 2
// Output = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Are outputs the same? Why?
// The outputs are not the same. The first one filters all the even values first and then multiplies them by 2. 
// The second value multiples all values by two, thereby making them even. 