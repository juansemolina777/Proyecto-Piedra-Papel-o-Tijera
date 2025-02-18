// Rock Paper Scissors GAME
// By Niclaus Go

// Assign initial humanScore && computerScore to 0
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

// create a method for generating random number from 1 to 3
// numbers will define if Rock Paper Scissors
const getComputerChoice = () => {
    let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (number) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissor"
            break;
    }
}

//users are given a choice by typing rock paper scissors
//the round would not progress if incorrect input from user
const getHumanChoice = () => {
    let choice = prompt("Choose: rock, paper, scissor");
    let formattedChoice = choice.toLowerCase().trim();
    if (formattedChoice === "rock" 
        || formattedChoice === "paper" 
        || formattedChoice === "scissor" ) {
            roundNumber++;
            return formattedChoice;
    }else {
        alert("Wrong input, Try again");
    }
} 

//creates rock paper scissor logic if one of the player wins, +1 on the player
const playRound = () => {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); 

    if (humanChoice === computerChoice) {
        console.log("ITS A DRAW");
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissor") {
                humanScore++;
            }else{
                computerScore++;
            }
            alert("Human: " + humanScore + " Computer: " + computerScore );
            break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
            }else{
                computerScore++
            }
            alert("Human: " + humanScore + " Computer: " + computerScore );
            break;
        case "scissor":
            if (computerChoice === "paper") {
                humanScore++;
            }else{
                computerScore++;
            }
            alert("Human: " + humanScore + " Computer: " + computerScore );
            break;
        case undefined:
            break;        
    }
    console.log(humanChoice);
    console.log(computerChoice);
    }

//game will run for 5 rounds only, the one who has a greater score WINS.
//after 5 rounds, will prompt to ask for another round of the game 
const gameStart = () => {
    while (roundNumber < 5) {
        playRound();
    }
    if (humanScore > computerScore) {
        alert("HUMAN WINS!!!");
    }else{
        alert("COMPUTER WINS!");
    }
    
    let startGame = prompt("Want to start Again? Y/N");
    if (startGame === "Y") {
        roundNumber = 0;
        humanScore = 0;
        computerScore = 0;
        gameStart();
    }else{
        alert("Goodbye, Play With my Next Time")
    }
}

//game test run
gameStart();

