let choice=["rock","paper","scissors"];
function getComputerChoice() {
    let shoot=Math.floor(Math.random()*3);
    console.log("Computer chooses " + choice[shoot]);
    return choice[shoot];
}

function getHumanChoice() {
    let shoot=prompt("Shoot your shot/rock, paper or scissors");
    return shoot;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice===computerChoice) {
        return "It's a tie! Play another round";
    }
    else if ((humanChoice=="rock"&&computerChoice=="scissors")||(humanChoice=="paper"&&computerChoice=="rock")||(humanChoice=="scissors"&&computerChoice=="paper")) {
        humanScore++;
        return `You win. ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
         return `You lose. ${computerChoice} beats ${humanChoice}`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
