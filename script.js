let computer_score = 0;
let human_score = 0;
let result ;
let game_over;
choices = ["rock","paper","scissor"];





function play_round(human_choice){
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    let result = calculate_result(human_choice,computer_choice);
    if(result){
        human_score++; 
    }else{
        computer_score++;
    }

    if (!game_over) {
        document.getElementById("compare").textContent = `${human_choice} vs ${computer_choice}`;
        document.getElementById("result").textContent = `Player score ${human_score} 
        Computer score ${computer_score}`;
    }
    if(computer_score >= 5){
        game_over = true;
        document.getElementById("winner").innerHTML = "Winner = Computer";
        document.getElementById("replay_button").innerHTML = `<button onclick="replay()">Replay</button>`;
    }else if(human_score >= 5){
        game_over = true;
        document.getElementById("winner").innerHTML = "Winner = Human";
        document.getElementById("replay_button").innerHTML = `<button onclick="replay()" >Replay</button>`;
    }
}






function calculate_result(human_choice,computer_choice){
    if(human_choice == computer_choice){
        result = null;
    }else if(human_choice == "rock" && computer_choice == "paper"){
        result = false;
    }else if(human_choice == "rock" && computer_choice == "scissor"){
        result = true;
    }else if(human_choice == "paper" && computer_choice == "rock"){
        result = true;
    }else if(human_choice == "paper" && computer_choice == "scissor"){
        result = false;
    }else if(human_choice == "scissor" && computer_choice == "paper"){
        result = true;
    }else if(human_choice == "scissor" && computer_choice == "rock"){
        result = false;
    }
    return result;
}


function replay(){
    computer_score = 0;
    human_score = 0;
    game_over = false;
    document.getElementById("compare").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("winner").textContent = "";
    document.getElementById("replay_button").innerHTML = null;

} 