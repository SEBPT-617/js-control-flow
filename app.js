console.log("js:loaded");
// control is how we write our code to change/manage the order in which the code runs.
// three constructs - approaches / syntaxes for managing control flow

// sequence of the code
// when the browser loads our JS file -> it will read through the file, top to bottom, and then run the code TOP TO BOTTOM

console.log("first message");
console.log("second message");
console.log("3rd message");

// branching statements - if else statements
// either or - if else
// multi-condition statement - if / else if / ... / else
// Level up -> ternary statement (one liner if else )
// Level up ->  switch case -> slight more succinct if else

// loops - for loop  / for of -> ways that we can run code some number of times (N)

let highScore = 100;
let score = 10;

// evaluate what the current score and compare it to the high score

// reassignment to the score variable
score = score + 80;

console.log(
    "testing score after change, but before if/else:",
    90,
    "highscore: ",
    highScore
);

// score += 100 // assignment operator - addition -> / * -

// OR -> either or situation
// || evaluating conditions -> where if either value can be true -> true

// AND -> both and logical operation
// && both expressions on eitherside of the && have to be true -> true

let input = "pizza";

// if (true){
//     console.log('mmm hungry for sandwiches? ')
// } else {
//     console.log('not hungry for sandwiches...')
// }

// let condition = true

if (score > highScore) {
    // if the condition is true (or can evaluate to true)
    // then this code in the { } runs
    console.log("update the highScore");
} else if (score > highScore - 25) {
    console.log("getting close to the highscore keep going!");
} else {
    console.log("continue the game");
}

// if the condition is not true (false) -> if statement is escaped - it moves on

// let color = prompt("Enter color please");
let color = "goldenrod";

// if - green
// else if - yellow
// else if - red
// else

if (color === "green") {
    console.log("Go");
} else if (color === "yellow") {
    console.log("Slow");
} else if (color === "red") {
    console.log("Stop");
} else {
    console.log("Whatever");
}


// truthiness - is the the ability of JS to evaluate a value to true
// when a truthy value is provided to a branching statement - JS will evaluate it's truthiness
// if it is truthy - the code will run as if it were 'true'

// Falsey is the opposite - there are fewer examples of falsey values - 
/**
 * Falsey: 
 * 1. false
 * 2. undefined
 * 3. null
 * 4. NaN 
 * 5. "" - empty string
 * 6. 0 - the number zero
 * 
 */
let truthy = 0;

if (truthy) {
    console.log("is truthy");
} else {
    console.log("falsey");
}

// expected result: falsey 
// reason: because 0 is NOT truthy - it will bypass the first if statement and print the falsey statement

// switching the variable truthy to any falsy values will return the same log
// changing truthy to "abc", true, 100, -100, 3.14, {}, [], or any other value will log 'is truthy'. 