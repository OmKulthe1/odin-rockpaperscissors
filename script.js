function getRand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
  
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  let scoretxt = "Your Score: " + humanScore + "   Computer Score: " + computerScore;
  const score = document.querySelector("#score");
  if (score) {
    score.textContent = scoretxt;
  } else {
    console.error('Error: Could not find the score element.');
  }
  
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");
  
  rockButton.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
  });
  
  paperButton.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
  });
  
  scissorsButton.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
  });
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Round tied!");
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')) {
      computerScore += 1;
      updateScoreDisplay();
      console.log("Computer choose", computerChoice, "\nYou lose!", "\nYour Score:", humanScore, " |||| Computer Score", computerScore);
    } else {
      humanScore += 1;
      updateScoreDisplay();
      console.log("Computer choose", computerChoice, "\nYou Win!", "\nYour Score:", humanScore, " |||| Computer Score", computerScore);
    }
  
    if (humanScore >= 5) {
        updateScoreDisplay();
      alert("You Win!!");
      location.reload();
    } else if (computerScore >= 5) {
        updateScoreDisplay();
      alert("You Lose!!");
      location.reload();
    }
  }
  
  function updateScoreDisplay() {
    scoretxt = "Your Score: " + humanScore + "   Computer Score: " + computerScore;
    if (score) {
      score.textContent = scoretxt;
    } else {
      console.error('Error: Could not find the score element.');
    }
  }