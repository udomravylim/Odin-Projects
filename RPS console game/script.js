const results = document.querySelector("#results");

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let CompChoice = Math.floor(Math.random() * 3) + 1;
  if (CompChoice === 1) {
    return "r";
  } else if (CompChoice === 2) {
    return "p";
  } else {
    return "s";
  }
}

function playGame() {
  function playRound(humanChoice, CompChoice) {
    if (humanChoice === "r" && CompChoice === "r") {
      results.innerHTML = `you chose Rock!! <br> Computer chose Rock!! <br> it is a tie!!`;
    } else if (humanChoice === "r" && CompChoice === "p") {
      results.innerHTML = `you chose Rock!! <br> Computer chose paper!! <br> you lose!!`;
      compScore++;
    } else if (humanChoice === "r" && CompChoice === "s") {
      results.innerHTML = `you chose Rock!! <br> Computer chose Scissor!! <br> You win`;
      humanScore++;
    } else if (humanChoice === "p" && CompChoice === "r") {
      results.innerHTML = `you chose paper!! <br> Computer chose Rock!! <br> You win!!`;
      humanScore++;
    } else if (humanChoice === "p" && CompChoice === "p") {
      results.innerHTML = `you chose paper!! <br> Computer chose paper!! <br> It is a tie!!`;
    } else if (humanChoice === "p" && CompChoice === "s") {
      results.innerHTML = `you chose paper!! <br> Computer chose scissor!! <br> You Lose!!`;
      compScore++;
    } else if (humanChoice === "s" && CompChoice === "r") {
      results.innerHTML = `you chose scissor!! <br> Computer chose Rock!! <br> You lose!!`;
      compScore++;
    } else if (humanChoice == "s" && CompChoice === "p") {
      results.innerHTML = `you chose scissor!! <br> Computer chose paper!! <br> You win!!`;
      humanScore++;
    } else if (humanChoice === "s" && CompChoice === "s") {
      results.innerHTML = `you chose scissor!! <br> Computer chose scissor!! <br> it is a tie!!!`;
    } else {
      results.textContent = "error: invalid choice!!";
    }
    
    
    results.innerHTML += `Your score ${humanScore} - Comp Score ${compScore}`;

    // Check winner at 5 points
    if (humanScore === 5 || compScore === 5) {
      if (humanScore === 5) {
        results.innerHTML += `<br> 🎉 You win the game!`;
      } else {
        results.innerHTML += `<br> 💻 Computer wins the game!`;
      }
    }
  }

  document
    .getElementById("rock")
    .addEventListener("click", () => playRound("r", getComputerChoice()));
  document
    .getElementById("paper")
    .addEventListener("click", () => playRound("p", getComputerChoice()));
  document
    .getElementById("scissors")
    .addEventListener("click", () => playRound("s", getComputerChoice()));
  console.log(`human score: ${humanScore}`);
  console.log(`Computer score: ${CompScore}`);
  if (humanScore > CompScore) {
    console.log("You win the Game!!");
  } else {
    console.log("you Lose the Game!!");
  }
}

playGame();
