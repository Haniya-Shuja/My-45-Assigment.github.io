//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the
//function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of arguments each time.
function mySandwiches(items) {
    return "I want sandwiches of ".concat(items.join(', '));
}
var collection1 = mySandwiches(["Hams", "Cheese"]);
var collection2 = mySandwiches(["Turkey", "Swiss"]);
var collection3 = mySandwiches(["Chicken", "Egg"]); // Assuming an empty array when no sandwiches are wanted
console.log(collection1);
console.log(collection2);
console.log(collection3);
