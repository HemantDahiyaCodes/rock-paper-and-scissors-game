// Getting buttons and displays
const rockIcon = document.getElementById("rock");
const paperIcon = document.getElementById("paper");
const scissorsIcon = document.getElementById("scissors");
const myScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const winnerText = document.querySelector(".winner");

// Getting human Choice.
const getHumanChoice = (callback) => {
  let choice;

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
    winnerText.textContent = `You chose ${choice}`
}

getHumanChoice(humanChose)