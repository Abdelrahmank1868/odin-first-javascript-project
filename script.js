const choices = ["rock", "paper", "scissors"];

function game(){
    playRound();
}
    
function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}    

function playerChoice(){
    let input = prompt("Choose either Rock, Paper or Scissors");
    while (input == null){
        input = prompt("Choose either Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
      while (check == false){
          input = prompt("Choose either Rock, Paper or Scissors, capitalization does not matter");
      }
      while (input == null){
        input = prompt("Choose either Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input)
    // console.log(input);
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]   // get random input for computer
}

function validateInput(choice){
    return choices.includes(choice)
}


game();





// 1. Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection

// 3. and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// a. Make your function’s playerSelection parameter case-insensitive -
// (so users can input rock, ROCK, RocK or any other variation).

