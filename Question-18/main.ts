//Seeing the World: Think of at least five places in the world you’d like to visit.

// Store the locations in a array. Make sure the array is not in alphabetical order.

let placeToVisit: string[] =["Muree","Kashmir","Saif-ul-mulk","Naran","China"];

console.log("origional:", placeToVisit);

//• Print your array in alphabetical order without modifying the actual list.

console.log("Alphabatical Order:", placeToVisit.slice().sort());

// Show that your array is still in its original order by printing it.

console.log("origional:", placeToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.

console.log("reverse order;",placeToVisit.slice().sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log("origional:", placeToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Origional order", placeToVisit.sort());
console.log(placeToVisit);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.


console.log("reverse alphabatical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
