//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Mahnoor", "Rabiya", "Nosheen", "Nabia hani"];
for (var i = 0; i < names.length; i++) {
    console.log("hello, ".concat(names[i], "! how are you today?"));
}
//for each
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you?"));
});
