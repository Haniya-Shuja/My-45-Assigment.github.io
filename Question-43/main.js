// //Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function show_magicians (magicians : string[]) {
//     magicians.forEach(name => console.log(name));
// }
// function make_great (magicians : string[]) {
//     return magicians.map(name => `The Great $[name}`)}
//     let magicians_name = ["Herry Potter","Usman","Jawad"];
//     //Making a copy of original array through slidfunction
//     let copy_magicians_name = magicians_name.slice();
//        let copy_great_magicians = make_great(copy_magicians_name);
// //  sohw both origional and copied array
// //origional
// console.log('Origional array\n');
//        show_magicians(magicians_name);
// // ..copied
// console.log('\nCopied array\n');
// show_magicians(copy_great_magicians);
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Herry Potter", "Usman", "Jawad"];
// Making a copy of original array through slice function
var copy_magicians_name = magicians_name.slice();
var copy_great_magicians = make_great(copy_magicians_name);
// Show both original and copied array
console.log('Original array:\n');
show_magicians(magicians_name);
console.log('\nCopied array with "The Great" added:\n');
show_magicians(copy_great_magicians);
