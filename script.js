function computerPlay(){ // created function called computerPlay that will randomly return one of those three
let game = ['Rock', 'Paper', 'Scissors']; // create an array with Rock Paper and Scissor
let randomPicker = game[Math.floor(Math.random() * game.length)]; // generate a random number between 0 and the length of the array, with 0 decimals
return randomPicker; // returns randomPicker to generate random word from array
}
console.log(computerPlay());





// 1. Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection

// 3. and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// a. Make your function’s playerSelection parameter case-insensitive -
// (so users can input rock, ROCK, RocK or any other variation).

