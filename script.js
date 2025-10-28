let choice=["rock","paper","scissor"];
function getComputerChoice() {
    let shoot=Math.floor(Math.random()*3);
    return choice[shoot];
}