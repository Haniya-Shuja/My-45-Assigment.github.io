// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite
var guestsList = ["Yumna", "Faiza", "Iqra"];
//who cant make dinner
var unableAttends = guestsList.splice(1, 1)[0];
console.log("".concat(unableAttends, " not invited for dinner"));
//push guestslists.push("Haniya");
guestsList.push("Haniya");
console.log(guestsList);
//print a message
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " You are cordially invited for dinner"));
});
