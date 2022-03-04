const options = ["rock", "paper", "scissors"];
const winners = [];

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}

function game(){
    //for playing the game for multiple rounds
    for(let i=1;i<=5;i++){
        playRound();
    }
    logWins();
}

function playRound(){
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const winner=checkWinner(playerSelection,computerSelection);
    winners.push(winner);

}

function playerPlay(){
    let input = prompt("Type Rock, Paper or Scissors:");
    while(input==null){
        input=prompt("Type Rock, Paper or Scissors:");
    }
    input=input.toLowerCase();
    let check = validInput(input);
    while(check == false){
        input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact(Case Insensitive)");
        while(input==null){
            input=prompt("Type Rock, Paper or Scissors:");
        }

    input=input.toLowerCase();
    check=validInput(input);
    }
    return input;
}

function validInput(option){
    return options.includes(option);    
}




function checkWinner(choiceP,choiceC){
    if(choiceP == choiceC){
        return "Tie";
    }else if(   (choiceP === "rock" && choiceC == "scissors") ||
                (choiceP === "paper" && choiceC == "rock") ||
                (choiceP === "scissors" && choiceC == "paper")  ){
                    console.log("You Win!");
                return "Player";
            }else{ 
                    console.log("Computer Win!");
                    return "Computer"; 
                }
}

function logWins(){
    let pla
    console.log(winners);
}

//game();
