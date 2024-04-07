// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, printMessage) {
    console.log("You selected a ".concat(size, " size shirt with the message ").concat(printMessage, " print on shirt"));
}
make_shirt("Large", "I like typescript");
make_shirt("Medium", "Typescript");
