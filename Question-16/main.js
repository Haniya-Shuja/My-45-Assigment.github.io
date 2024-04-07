//More Guests: You just found a bigger dinner table, so now more space is a//vailable. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestsList = ["Yumna", "Faiza", "Iqra"];
//check
console.log("great news! we found a bigger table");
// beginning of th array
guestsList.unshift("Komal");
//add middle of the array
guestsList.splice(Math.floor(guestsList.length / 2), 0, "Hafza");
//at the end
guestsList.push("Uzma");
console.log(guestsList);
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are all cordially invited"));
});
