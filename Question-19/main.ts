//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("Unfortunately! the new dinner table wont arrive so we can invite only 2 guest");

let guestslist:string[] = ["Alice","Bob","Emily", "johnson",];

//adding two guest

guestslist.unshift("victor","John Doe");
console.log("updated list of guest:", guestslist);

//print a message to guest not invited

while (guestslist.length > 2) {
    let removedGuest = guestslist.pop();
    if (removedGuest !== undefined) {
      console.log(`Sorry, ${removedGuest}, you can't be invited for dinner.`);
    }
  }

  console.log( guestslist);
  // print mesage invitation of 2 guest
 guestslist.forEach(guest =>{
    console.log(`Dear ${guest}, both you are invited for dinner`);
 }
 ) 
 //remove the last  two names

 guestslist.splice(0, guestslist.length);

 console.log("Updatedlist:", guestslist );
