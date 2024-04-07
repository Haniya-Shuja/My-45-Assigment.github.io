//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Ayesha", "Hassan", "Faizan", "hira", "Kinza"];
var new_users = ["Ali", "Hassan", "Ubaid", "hira", "khadija"];
//loop through new user check
new_users.forEach(function (one_new_user) {
    //Making a condition for user is alraedy exist
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === one_new_user.toLowerCase(); });
    //print message through if-else statment
    if (our_condition) {
        console.log("Sorry ".concat(one_new_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(one_new_user, " is available "));
    }
});
