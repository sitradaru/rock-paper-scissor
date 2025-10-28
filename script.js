let choice=["rock","paper","scissor"];
function getComputerChoice() {
    let shoot=Math.floor(Math.random()*3);
    return choice[shoot];
}

function getHumanChoice() {
    let shoot=prompt("Shoot your shot/rock, paper or scissor");
    return shoot;
}