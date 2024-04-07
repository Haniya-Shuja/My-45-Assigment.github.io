//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//Making function
function make_shirt(size :String = "large", printMessage: String  = "I love Typescript"){
    console.log(`creating a ${size} size shirt with the message ${printMessage} print on th shirt`)
}
make_shirt();

make_shirt("Medium");

make_shirt("small", "I like typescript");