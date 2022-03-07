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

function checker(input) {
    //Round result details
    const CP = options[Math.floor(Math.random() * options.length)];

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
        case "tie":  
                    result_ref.innerHTML = "TIE";
                    break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}