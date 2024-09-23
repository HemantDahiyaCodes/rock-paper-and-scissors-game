"use strict";

// getting Computer choice
const getComputerChoice = () => {
  const numbers = [1, 2, 3];
  let computerChoice;

  const randomChoice = Math.floor(Math.random() * numbers.length);

  if (randomChoice === 1) {
    computerChoice = "rock";
    return computerChoice.toLowerCase();
  } else if (randomChoice === 2) {
    computerChoice = "paper";
    return computerChoice.toLowerCase();
  } else {
    computerChoice = "scissors";
    return computerChoice.toLowerCase();
  }
};

// Getting human choice
const getHumanChoice = () => {
  const humanChoice = prompt("Enter your choice: rock, paper or scissors:");
  if (humanChoice === "") {
    return getHumanChoice();
  } else if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert(`Please enter a valid choice`);
    return getHumanChoice();
  }
  return humanChoice.toLowerCase();
};

// console.log(getHumanChoice());

// console.log(playARound(getHumanChoice(), getComputerChoice()));
// Play the game for 5 rounds.
const playGame = () => {
  for (let i = 1; i <= 5; i++) {
    playARound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    return `You won!`;
  } else if (computerScore > humanScore) {
    return `Computer won!`;
  } else {
    return `It's a tie.`;
  }
  return `Your score is ${humanScore} and computer's score is ${computerScore}`;
};

// console.log(playGame());
let humanScore = 0;
let computerScore = 0;
const result = [];
const playARound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(
      `It's a tie. You chose ${humanChoice} and the computer chose ${computerChoice}`
    );
  }
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        humanScore += 1;
        console.log(
          `You won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      } else if (computerChoice === "paper") {
        computerScore += 1;
        console.log(
          `Computer won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        humanScore += 1;
        console.log(
          `You won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      } else if (computerChoice === "scissors") {
        computerScore += 1;
        console.log(
          `Computer won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      }
      break;
    case "scissors":
      if (computerChoice === "paper") {
        humanScore += 1;
        console.log(
          `You won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      } else if (computerChoice === "rock") {
        computerScore += 1;
        console.log(
          `Computer won, You chose ${humanChoice} and computer chose ${computerChoice}`
        );
      }
      break;
  }
};

playARound(getComputerChoice(), getHumanChoice());