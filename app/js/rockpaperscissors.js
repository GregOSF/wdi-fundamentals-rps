////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "Tie";
    } else if ((playerMove === "rock") && (computerMove === "scissors")) {
        winner = 'Player' ;       
    } else if ((playerMove === "rock") && (computerMove === "paper")) {
        winner = 'Computer';        
    } else if ((playerMove === "scissors") && (computerMove === "paper")) {
        winner = 'Player';
    } else if ((playerMove === "scissors") && (computerMove === "rock")) {
        winner = 'Computer';
    } else if ((playerMove === "paper") && (computerMove === "rock")) {
       winner = 'Player';
    } else if ((playerMove === "paper") && (computerMove === "scissors")) {
       winner = 'Computer';
    }      
    return winner;
}
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        console.log("You played " + playerMove);
        var computerMove = getComputerMove();
        console.log("The computer played " + computerMove);
        var winner = getWinner(playerMove, computerMove);
            if (winner === "Player") {
                    playerWins +=1;
                } else if (winner === "Computer") {
                    computerWins +=1;
                }
        console.log("Score is Player: " + [playerWins] + " / Computer: " + [computerWins]);
}
        console.log("FINAL SCORE -- Player: " + [playerWins] + " / Computer: " + [computerWins]);
            if (playerWins > computerWins) {
                    console.log("YOU'RE THE BIG WINNER!")
                } else {
                    console.log("YOU LOST TO A MACHINE YOU BIG LOSER!")
                }
    return [playerWins, computerWins];
}

playToFive();

