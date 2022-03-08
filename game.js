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
let count = 0;
function checker(input) {
    //Round result details
    const CP = options[Math.floor(Math.random() * options.length)];

    document.getElementById("comp_choice").innerHTML =
    `Computer choose <span> ${CP.toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML =
    `You choose <span> ${input.toUpperCase()} </span>`;

    // count++;

    switch(choicesObject[input][CP]){
        case "win":  
                    result_ref.style.cssText = "background-color: #cefdce; color: #689f38";   
                    result_ref.innerHTML = "YOU WIN";
                    user_score++;   count++;
                    break;
        case "lose":
                    result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
                    result_ref.innerHTML = "YOU LOSE";
                    computer_score++;   count++;
                    break;
        case "tie":  
                    result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
                    result_ref.innerHTML = "TIE";
                    break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    if(count > 5){
        let play =confirm("Do you want to play again?");
        if(play)
            location.reload();
        else{
            alert("Thankyou for playing♥");
            location.quit();
        }
    }
}