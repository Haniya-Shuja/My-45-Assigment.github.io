//Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//print name with whitespaces
var name_with_whitespaces = "\t \n  Kamran Tessori  \t \n  ";
console.log("Name with Whitespaces ", name_with_whitespaces);
//Strip the whitespaces form name
var name_stripped = name_with_whitespaces.trim();
console.log(" stripped Name ", name_stripped);
