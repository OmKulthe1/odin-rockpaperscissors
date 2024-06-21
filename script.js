function getRand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    let cChoice = getRand(1, 3);

    if (cChoice === 1) {
        return 'rock';
    } else if (cChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let hChoice = prompt("Enter Rock, paper or Scissors").toLowerCase();

    while(hChoice !== 'rock' && hChoice !== 'paper' && hChoice !== 'scissors') {
        console.log("Invalid choice. Please enter Rock, paper or Scissors.");
        hChoice = prompt("Enter Rock, paper or Scissors").toLowerCase();
    }

    return hChoice;
}

let gameRound = 5;
let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Round tied!");
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore += 1;
        round += 1;
        console.log("Computer choose", computerChoice, "\nYou lose!", "\nYour Score:", humanScore, " |||| Computer Score", computerScore);
    } else {
        humanScore += 1;
        round += 1;
        console.log("Computer choose", computerChoice, "\nYou Win!", "\nYour Score:", humanScore, " |||| Computer Score", computerScore);
    }
}

function playGame() {
    while (round < gameRound) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();