//Name Cases: Store a person’s name in a variable, and
// then print that person’s name in lowercase, uppercase, and titlecase.

//create a variable
let person_Name = "Fahad";

//print in lowercase

console.log("lower Case:",person_Name.toLowerCase());

//print in Uppercase

console.log("Upper Case:", person_Name.toUpperCase());

//print in title case 

console.log("Title case:", person_Name.replace(/\bw/g,c =>c.toUpperCase()));