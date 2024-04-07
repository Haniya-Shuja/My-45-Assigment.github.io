// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car = "Fortuner";
// Tests for equality and inequality with strings
console.log('Is car is equal to Fortuner');
console.log(car == "Fortuner");


console.log('Is car is not equal to Fortuner');
console.log(car != "Fortuner");

//• Tests using the lower case function

let upperCaseApple = "APPLE";

console.log("\nIs APPLE is equal to apple after converting the to lowerCase")
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is NOT equal to apple after converting the to lowerCase")
console.log(upperCaseApple.toLowerCase() != "apple");

//NUmerical test


//equality
let priceOfCar: number = 100000;
console.log("\n Is price of car is equal to 100000");
console.log(priceOfCar == 100000);

//non-equality
console.log("\n Is price of car is not equal to 100000");
console.log(priceOfCar != 100000);



 //greater than and less than, 

 console.log("\n Is price of car is greator than  100000");
console.log(priceOfCar > 100000);

console.log("\n Is price of car is less than 100000");
console.log(priceOfCar < 100000);

 //greater than or equal to, and less than or equal to

 console.log("\n Is price of car is less than  or equal to 100000");
console.log(priceOfCar <= 100000);

console.log("\n Is price of car is greator than  or equal to 100000");
console.log(priceOfCar >= 100000);

//• Tests using "and" and "or" operators
let carPrice: number = 100000;  
let carColor : String = 'Red';

//and operator
console.log("\n Is carPrice is  equal to 100000 and carColor is Red?");
console.log(carPrice == 100000 && carColor == "Red");

console.log("\n Is carPrice is  equal to 100000 and carColor is equal to Red?");
console.log(carPrice == 100000 && carColor == "Black");

//or aperator
console.log("\n Is carPrice is  not equal to 100000 and carColor is black?");
console.log(carPrice != 100000 || carColor == "Black");

console.log("\n Is carPrice is  equal to 100000 and carColor is equal to black?");
console.log(carPrice == 100000 || carColor == "Black");


// • Test whether an item is in a array



// • Test whether an item is not in a array

let fruits = ["Apple", "banana","Orange"];

console.log(fruits);

console.log("\n Is orange is included in my fruits array?")
console.log(fruits.includes("Orange"));

console.log("\n Is orange is not included in my fruits array?")
console.log(!fruits.includes("Orange"));