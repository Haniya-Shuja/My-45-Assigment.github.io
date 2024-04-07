//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
//invitation for dinner
var people = ["John", "Doe", "Emily"];
var message = "You are invited for dinner in my house";
people.forEach(function (person) {
    console.log("Hello ".concat(person, ", ").concat(message));
});
//map
//invite guest 
var invitation = people.map(function (person) { return "dear ".concat(person, ", you are invited to dinner"); });
console.log(invitation);
