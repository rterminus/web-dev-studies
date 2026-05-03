function getComputerChoice() {
  let choice = Math.random();

  if (choice > 0.66) {
    return "rock";
  } else if (choice > 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("what is your choice? (rock, paper, scissors)").toLowerCase();

  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! rock beats scissors");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! paper beats rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! scissors beats paper");
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (computerScore > humanScore) {
  console.log("The computer wins the game!");
} else {
  console.log("The game ends in a tie!")
}
