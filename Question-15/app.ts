// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite


let guestsList = ["Yumna", "Faiza", "Iqra"];


//who cant make dinner

let unableAttends : string | undefined =  guestsList.splice(1,1)[0];

console.log(`${ unableAttends} not invited for dinner`);

//push guestslists.push("Haniya");
guestsList.push("Haniya");
console.log(guestsList);

//print a message

guestsList.forEach(guest =>{
    console.log(`Dear ${guest} You are cordially invited for dinner`);
})
