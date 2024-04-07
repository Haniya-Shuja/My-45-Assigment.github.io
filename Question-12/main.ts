//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



let names = ["Mahnoor","Rabiya", "Nosheen", "Nabia hani"];

for(let i = 0; i <names.length; i++){
console.log(`hello, ${names[i]}! how are you today?`);
}

//for each

names.forEach(friend => {
    console.log(`Hi, ${friend}! how are you?`);
});

