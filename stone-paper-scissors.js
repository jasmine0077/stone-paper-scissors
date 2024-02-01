let userScore = 0;
let compScore = 0;

const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#usersc");
const compScoreBoard = document.querySelector("#compsc");

const getCompChoice = () => {
    const option = ["stone", "paper", "scissors"];
    const randInd = Math.floor(Math.random()* 3);
    return option[randInd];
};

const drawGame = () => {
    msg.innerHTML = "Draw Game. Play again :(";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreBoard.innerHTML = userScore;
        msg.innerHTML = `You win :) Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScoreBoard.innerHTML = compScore;
        msg.innerHTML = `You lose :() ${compChoice} beats Your ${userChoice}`;;
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        // for draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            // for scissors, and paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // for scissors, and stone
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // for stone, and paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    });
});