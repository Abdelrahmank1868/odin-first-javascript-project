const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame(){
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Draw: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}

function startGame() {
    //play the game until someone wins 5 times
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener('click', () => {
        if (img.id) {
          playRound(img.id);
        }
      })
    );
  }

function playRound(playerSelection){

    let wins = checkWins();

    if(wins >= 5){
        return;
    }

    const computerSelection = computerChoice();

    const winner = checkWinner(playerSelection, computerSelection);

    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if (wins == 5){
        // display and results
        // the button to visible
        // change text to display winner
        
        displayEnd();
    }

}   

function displayEnd(){
    let playerWins = winners.filter((item) => item == "You win!").length;

    if (playerWins == 5){
        document.querySelector('.winner').textContent = 'You Won 5 Games, You Are The Winner!';
    } else {
        document.querySelector('.winner').textContent = 'Try Again, The Computer Won 5 Times ):';
    }
    document.querySelector('.reset').style.display = 'flex';
}

function displayRound(playerSelection, computerSelection, winner){
  document.querySelector('.playerChoice').textContent = `You Chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
  document.querySelector('.computerChoice').textContent = `The Computer Chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
  document.querySelector('.winner').textContent = `Round Winner: ${winner}`;

  displayRoundWinner(winner);
}

function displayRoundWinner(winner){
    if (winner == "You win!"){
        document.querySelector('.winner').textContent = "You Won The Round!";
    } else if (winner == "You lose!"){
        document.querySelector('.winner').textContent = "The Computer Won The Round";        
    } else {
        document.querySelector('.winner').textContent = "Draw";
    }
}

function tallyWins(){
    let pWinCount = winners.filter((item) => item == "You win!").length;
    let cWinCount = winners.filter((item) => item == "You lose!").length;
    let draw = winners.filter((item) => item === "Its a draw").length;

    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score: ${draw}`;
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
    // update DOM with computerSelection
    const choice = choices[Math.floor(Math.random()*choices.length)];   // get random input for computer


    document.querySelector(`.${choice}`).classList.add('active')

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove('active');
      }, 700);

    return choice
}

console.log(computerChoice);
function checkWins(){
    let pWinCount = winners.filter((item) => item == "You win!").length;
    let cWinCount = winners.filter((item) => item == "You lose!").length;
    return Math.max(pWinCount, cWinCount);
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

function setWins(){
     pWinCount = winners.filter((item) => item == "You win!").length;
     cWinCount = winners.filter((item) => item == "You lose!").length;
     draw = winners.filter((item) => item === "Its a draw").length;
}
startGame()
 

// 1. Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
// the playerSelection and computerSelection

// 3. and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// a. Make your function’s playerSelection parameter case-insensitive -
// (so users can input rock, ROCK, RocK or any other variation).

