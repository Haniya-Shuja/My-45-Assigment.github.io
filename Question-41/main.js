//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array
var magicians_names = ["Usama", "Khalid", "Farhan"];
show_magicians(magicians_names);
