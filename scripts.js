var rockSelection = document.getElementById("rockSelection");
rockSelection.addEventListener("click", rockChoice);
let rockValue = "Rock"

var paperSelection = document.getElementById("paperSelection");
paperSelection.addEventListener("click", paperChoice);
let paperValue = "Paper"

var scissorsSelection = document.getElementById("scissorsSelection");
scissorsSelection.addEventListener("click", scissorsChoice);
let scissorsValue = "Scissors"

let compThing = document.getElementById("computerSelection")
let newDiv = document.createElement("DIV")
let resultDisplay = document.getElementById("result")
let resultDiv = document.createElement("DIV")
let userChoice;

function win(){
  var winning = "Congratulations! You won!";
  resultDiv.innerHTML = winning;
  resultDisplay.appendChild(resultDiv)
}


function lose(){
  var losing = "Darn! Better Luck Next Time";
  resultDiv.innerHTML = losing;
  resultDisplay.appendChild(resultDiv)
}


function draw(){
  var tie = "It's a Draw!";
  resultDiv.innerHTML = tie;
  resultDisplay.appendChild(resultDiv)
}



function computerChoice(){
  var weapons = ["Rock", "Paper", "Scissors"]
  var compChoice = weapons[Math.floor(Math.random() * weapons.length)]
  // return weapons[compChoice];
  newDiv.innerHTML = compChoice;
  compThing.appendChild(newDiv)
}


function rockChoice(){
  userChoice = rockValue;
  rockOutcomes()
} 

function paperChoice(){
  userChoice = paperValue;
  paperOutcomes()
} 

function scissorsChoice(){
  userChoice = scissorsValue;
  scissorsOutcomes()
} 

function rockOutcomes(rockValue){
  var compSelect = computerChoice();
    if (rockValue === compSelect) {
      draw();
    } else if (rockValue == compSelect("Paper")){
      lose();
    } else {
      win();
    }
}

function paperOutcomes(paperValue){
  var compSelect = computerChoice();
    if (paperValue === compSelect) {
      draw();
    } else if (paperValue == compSelect("Scissors")){
      lose();
    } else {
      win();
    }
}

function scissorsOutcomes(scissorsValue){
  var compSelect = computerChoice();
    if (scissorsValue === compSelect) {
      draw();
    } else if (scissorsValue == compSelect("Rock")){
      lose();
    } else {
      win();
    }
}