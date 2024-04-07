//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• //Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//•// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• //Print a message to each of the two people still on your list, letting them know they’re still invited.

//• //Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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
