// Getting buttons and displays
const rockIcon = document.getElementById("rock");
const paperIcon = document.getElementById("paper");
const scissorsIcon = document.getElementById("scissors");
const myScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");
const winnerText = document.querySelector(".winner");

// Getting human Choice.
const getHumanChoice = (callback) => {
  rockIcon.addEventListener("click", () => {
    callback("rock");
  });

  paperIcon.addEventListener("click", () => {
    callback("paper");
  });

  scissorsIcon.addEventListener("click", () => {
    callback("scissors");
  });
};

const humanChose = (choice) => {
  return choice;
};

// getHumanChoice(humanChose);

// Getting computer Choice.
const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
console.log(getComputerChoice());

// Playing game for 5 rounds.
let computerscore = 0;
let humanScore = 0;
const playGame = () => {
  const playARound = (humanChoice, computerChoice) => {
    myScoreText.textContent = `Your score is: ${humanScore}`;
    computerScoreText.textContent = `Computer's score is: ${computerscore}`;
    if (humanChoice === computerChoice) {
      winnerText.textContent = `It's a tie. You chose ${humanChoice} and computer chose ${computerChoice}`;
    }
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          humanScore++;
          myScoreText.textContent = `Your score is: ${humanScore}`;
          winnerText.textContent = `You won. You chose ${humanChoice} and computer chose ${computerChoice}`;
        } else if (computerChoice === "paper") {
          computerscore++;
          computerScoreText.textContent = `Computer's score is:${computerscore}`;
          winnerText.textContent = `You lost. You chose ${humanChoice} and computer chose ${computerChoice}`;
        }
        break;

      case "paper":
        if (computerChoice === "rock") {
          humanScore++;
          myScoreText.textContent = `Your score is: ${humanScore}`;
          winnerText.textContent = `You won. You chose ${humanChoice} and computer chose ${computerChoice}`;
        } else if (computerChoice === "scissors") {
          computerscore++;
          computerScoreText.textContent = `Computer's score is:${computerscore}`;
          winnerText.textContent = `You lost. You chose ${humanChoice} and computer chose ${computerChoice}`;
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          humanScore++;
          myScoreText.textContent = `Your score is: ${humanScore}`;
          winnerText.textContent = `You won. You chose ${humanChoice} and computer chose ${computerChoice}`;
        } else if (computerChoice === "rock") {
          computerscore++;
          computerScoreText.textContent = `Computer's score is:${computerscore}`;
          winnerText.textContent = `You lost. You chose ${humanChoice} and computer chose ${computerChoice}`;
        }
        break;
    }
  };
  getHumanChoice((humanchoice) => {
    const computerchoice = getComputerChoice();
    playARound(humanchoice, computerchoice);

    if (humanScore === 5) {
      winnerText.textContent = "You won";
      humanScore = 0;
      computerscore = 0;
    } else if (computerscore === 5) {
      winnerText.textContent = "Computer won";
      humanScore = 0;
      computerscore = 0;
    }
  });
};

playGame();
