let [computer_score,user_score]=[0,0];
let result_ref=document.getElementById("result");
let choicesObject = {
    'rock' : {
        'rock' : 'tie',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'tie',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'tie'
    }
}

let options = ["rock", "paper", "scissor"];

function checker(input){
    //Round result details
    let CP = options[Math.floor(Math.random() * options.length)];

    document.getElementById("comp_choice").innerHTML =
    `Computer choose <span> ${CP.toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML =
    `You choose <span> ${input.toUpperCase()} </span>`;
    console.log("Computer:"+CP+" vs "+"you:"+input);

    switch(choicesObject[input][CP]){
        case "win":     
                    result_ref.innerHTML = "YOU WIN";
                    user_score++;
                    break;
        case "lose":
                    result_ref.innerHTML = "YOU LOSE";
                    computer_score++;
                    break;
        case "tie": // default: 
                    result_ref.innerHTML = "TIE";
                    break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

/*function checkWinner(choiceP,choiceC){
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
    console.log(winners);
}
game();
/*function playerPlay(){
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
function game(){
    //for playing the game for multiple rounds
    //for(let i=1;i<=5;i++){
        playRound();
   // }
    //logWins();
}

function playRound(){
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const winner=checkWinner(playerSelection,computerSelection);
    winners.push(winner);
 const winners = [];
function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}
}*/