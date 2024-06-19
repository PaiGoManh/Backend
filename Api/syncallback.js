console.log("Example for syncronous callback")

function greet(name, callback){
    console.log("Hello, "+ name+"!");
    callback();
}

function sayGoodbye(){
    console.log("Goodbye!");
}
greet("Manu", sayGoodbye);