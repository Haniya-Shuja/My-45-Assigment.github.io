//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
// Check Even or Odd
// By [Haniya]
// Current Date: [1-4-2]
// Function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// Test the function
var numberToCheck = 7;
console.log("".concat(numberToCheck, " is ").concat(checkEvenOrOdd(numberToCheck), "."));
