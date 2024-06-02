let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let moves = document.querySelector('.moves');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let result = document.querySelector('.result');
let playerchoice = document.querySelector('.playerchoice');
let computerchoice = document.querySelector('.computerchoice');
let cchoice = ['Rock', 'Scissor', 'Paper'];
let computerSelection;
let playerSelection;
let playerCnt = 0;
let computerCnt = 0;


function computerChoice() {
    let randomIndex = Math.floor(Math.random() * cchoice.length);
    let fcchoice = cchoice[randomIndex]
    computerSelection = fcchoice;
    computerchoice.innerHTML = `Computer : ${computerSelection}`
    console.log(`Computer Choice : ${computerSelection}`);

    checkWinner();
}

computerChoice()

function disabledBtns() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
function enabledBtns() {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}

function playerChoice() {
    rock.addEventListener('click', function () {
        console.log('Rock');
        playerSelection = "Rock"
        playerchoice.innerHTML = `Player : ${playerSelection}`
        disabledBtns();
        setTimeout(computerChoice, 1000);
        enabledBtns();
    });
    paper.addEventListener('click', function () {
        console.log('Paper');
        playerSelection = "Paper"
        playerchoice.innerHTML = `Player : ${playerSelection}`
        disabledBtns();
        setTimeout(computerChoice, 1000);
        enabledBtns();
    });
    scissor.addEventListener('click', function () {
        console.log('Scissor');
        playerSelection = "Scissor"
        playerchoice.innerHTML = `Player : ${playerSelection}`
        disabledBtns();
        setTimeout(computerChoice, 1000);
        enabledBtns();
    });

}

playerChoice();

function checkWinner() {
    if (computerSelection !== undefined && playerSelection !== undefined) {
        winner(); // Only call winner if both selections are defined
    }
}

function winner() {
    if (computerSelection === playerSelection) {
        result.innerHTML = "Tie";
    } else if (
        (computerSelection === "Rock" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Scissor") ||
        (computerSelection === "Scissor" && playerSelection === "Rock")
    ) {
        result.innerHTML = "Player wins 🥳";
        player.innerHTML = `Player : ${playerCnt += 1}`;
    } else {
        result.innerHTML = "Computer wins";
        computer.innerHTML = `Computer : ${computerCnt += 1}`;
    }
}