//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.

//Then use your list to print a message to each person, inviting them to dinner.

//invitation for dinner

let people = ["John", "Doe", "Emily"];

let message = "You are invited for dinner in my house";

people.forEach(person =>{
    console.log(`Hello ${person}, ${message}`);
})

//map

//invite guest 

let invitation:string[] = people.map(person => `dear ${person}, you are invited to dinner`);
console.log(invitation);