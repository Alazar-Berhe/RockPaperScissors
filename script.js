
let systemchoice;
let humanchoice;
let humanScore=0;
let computerScore=0;
function getComputerChoice() {
    let computer=Math.random();
    if (computer <= 0.33) {
        systemchoice= "rock"
        
    } else if(computer <= 0.66){
        systemchoice= "paper"
        
    }else{
        systemchoice= "scissor"
       
    }
    return systemchoice;
}



function getHumanChoice() {
    humanchoice=prompt("rock,paper or scissor? please enter your choice!", "");
    return humanchoice.toLowerCase();
}



function playRound(systemchoice,humanchoice) {
    if (systemchoice===humanchoice) {
        console.log("draw");
    } else if ((systemchoice==="rock" && humanchoice=="scissor")||(systemchoice==="paper" && humanchoice=="rock")||(systemchoice==="scissor" && humanchoice=="paper")) {
        computerScore++;
        console.log("computer win");
        
    } else{
        humanScore++;
        console.log("you win")
    }
    
}

function playGame() {
    for (let i = 0; i < 5; i++) {
   let systemchoice = getComputerChoice();
   let humanchoice = getHumanChoice();
   
    playRound(systemchoice,humanchoice);
        
    }
    if (humanScore > computerScore) {
        console.log(" Congragulation you win in total of " + humanScore + "out of 5" );
        
        
    } else if (computerScore > humanScore) {
        console.log(" Computer win in total of " + computerScore + "out of 5" );
         
        
    } else{
        console.log("the result is draw");
       
    }
}

playGame();



