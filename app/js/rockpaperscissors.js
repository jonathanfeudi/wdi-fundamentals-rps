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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors")
    return move;
    else return getInput();
    }

function getComputerMove(move) {
    return randomPlay();
    }


function getWinner(playerMove, computerMove) {
    if (((playerMove === 'rock') && (computerMove === 'scissors')) || ((playerMove === 'scissors') && (computerMove === 'paper')) || ((playerMove === 'paper') && (computerMove === 'rock'))) {
        return 'player';
    }
    if (((playerMove === 'rock') && (computerMove === 'paper')) || ((playerMove === 'scissors') && (computerMove === 'rock')) || ((playerMove === 'paper') && (computerMove === 'scissors'))) {
        return 'computer';
    }  
    if (((playerMove === 'rock') && (computerMove === 'rock')) || ((playerMove === 'scissors') && (computerMove === 'scissors')) || ((playerMove === 'paper') && (computerMove === 'paper'))) {
        return 'tie';
    }  
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var outcome;
    
    while (playerWins < 5 && computerWins < 5) {
        outcome = getWinner(getPlayerMove(), getComputerMove());
        
        if (outcome === 'player') {
            playerWins++;
        }
        else if (outcome === 'computer') {
            computerWins++;
        }
        else {
            console.log('Tie.');
        }
    }

    return [playerWins, computerWins];
}

playToFive();