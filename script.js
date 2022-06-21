const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();
}
    
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}   


function playerChoice(){
    let input = prompt("Choose either Rock, Paper or Scissors");
    while (input == null){
        input = prompt("Choose either Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
      while (check == false){
          input = prompt("Choose either Rock, Paper or Scissors, capitalization does not matter");
    }
      while (input == null){
        input = prompt("Choose either Rock, Paper or Scissors");
    
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
       
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];   // get random input for computer
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return "Its a draw";
    } else if (
    (playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "You win!").length;
    let computerWins = winners.filter((item) => item == "You lose!").length;
    let draw = winners.filter((item) => item === "Its a draw").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Draw:", draw);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log("Round Results:", winner);
    console.log("-------------------------------------");
}

// 1. Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection

// 3. and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// a. Make your function’s playerSelection parameter case-insensitive -
// (so users can input rock, ROCK, RocK or any other variation).

