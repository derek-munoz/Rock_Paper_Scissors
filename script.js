//normal variables
var playerScore = 0;
var enemyScore = 0;
//dom variables 
const playerScore_span = document.getElementById("player-score");
const enemyScore_span = document.getElementById("enemy-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const ending = document.querySelector(".txtEndTitle");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const enemy_div = document.getElementById("e");

//function that chooses enemy's fighter
function calcEnemyChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    if (choices[randomNumber] === 'r') {
        document.getElementById('e').src = 'images/rock.png';
    }
    else if (choices[randomNumber] === 'p') {
        document.getElementById('e').src = 'images/paper.png';
    }
    else {
        document.getElementById('e').src = 'images/scissors.png';
    }
    return choices[randomNumber];

}
//console.log(calcEnemyChoice());

//function outputs correct words for victory or loss of draw
function convertToWord(letter) {
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORS";
}

//functions for actions in victory loss or draw
function victory(player) {
    //console.log("VICTORY");
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${convertToWord(player)} CLAIMS VICTORY`;
    document.getElementById(player).classList.add('green-glow');
    setTimeout(() => document.getElementById(player).classList.remove('green-glow'), 500);
    document.getElementById('borderE').classList.add('red-glow');
    setTimeout(() => document.getElementById('borderE').classList.remove('red-glow'), 500);

    if( playerScore == 3){
        document.getElementById('endScreen').style.display = 'block';
        txtEndTitle.innerHTML = 'VICTORY';
    }
}

function loss(player) {
    //console.log("LOSS");
    enemyScore++;
    enemyScore_span.innerHTML = enemyScore;
    result_p.innerHTML = `${convertToWord(player)} LOSSES`;
    document.getElementById(player).classList.add('red-glow');
    setTimeout(() => document.getElementById(player).classList.remove('red-glow'), 500);
    document.getElementById('borderE').classList.add('green-glow');
    setTimeout(() => document.getElementById('borderE').classList.remove('green-glow'), 500);

    if( enemyScore == 3){
        document.getElementById('endScreen').style.display = 'block';
        txtEndTitle.innerHTML = 'YOU LOOSE';
    }
}

function draw(player) {
    //console.log("DRAW");
    result_p.innerHTML = `DRAW`;
    document.getElementById(player).classList.add('grey-glow');
    setTimeout(() => document.getElementById(player).classList.remove('grey-glow'), 500);
    document.getElementById('borderE').classList.add('grey-glow');
    setTimeout(() => document.getElementById('borderE').classList.remove('grey-glow'), 500);
}

//funciton that runs game
function fight(playerChoice) {
    //console.log("you chose " + playerChoice);
    const enemyChoice = calcEnemyChoice();
    switch (playerChoice + enemyChoice) {
        case "rs":
        case "pr":
        case "sp":
            victory(playerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(playerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice);
            break;
    }
}

//main funciton
function main() {
    //functions that take note of choice

        rock_div.addEventListener('click', function () {
            //console.log("rock pressed");
            fight("r");
        })

        paper_div.addEventListener('click', function () {
            //console.log("paper pressed");
            fight("p");
        })

        scissors_div.addEventListener('click', function () {
            //console.log("scissors pressed");
            fight("s");
        })

        if(enemyScore == 3 || playerScore == 3){
            replay();
        }

        }

function startGame() {
    document.getElementById('introScreen').style.display = 'none';
}

function replay() {
    document.getElementById('endScreen').style.display = 'none';
    playerScore = 0;
    enemyScore = 0;
    playerScore_span.innerHTML = playerScore;
    enemyScore_span.innerHTML = enemyScore;
    document.getElementById('e').src = 'images/mystery.jpeg';
}

main();


