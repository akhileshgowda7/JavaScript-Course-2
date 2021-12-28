const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('hey');
greeterHey('Akhilesh Gowda');
greet('Hello')('Akhilesh');