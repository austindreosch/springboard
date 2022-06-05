const gameContainer = document.getElementById("game"); //the empty div
const restartButtonContainer = document.getElementById("restart");
const scoreKeeper = document.getElementById("scoreKeeper");
let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;
let noClicking = false;
let score = 0;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
// here is a helper function to shuffle an array
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
// make the gameboard function
function createDivsForColors(colorArray) {
  for (let color of colorArray) { //every index of the color array
    const newDiv = document.createElement("div"); // create a new div
      newDiv.classList.add(color); // give it a class attribute for the value we are looping over
      newDiv.addEventListener("click", handleCardClick); // call a function handleCardClick when a div is clicked on
      gameContainer.append(newDiv); // append the div to the element with an id of game
  }
}
let shuffledColors = shuffle(COLORS);
let gameStartButton = document.getElementById("startbutton");
let gameStarted = false;
//for initial game start button
gameStartButton.addEventListener("click", function(event){
    startGame();
    event.target.remove();
    
});
function startGame()
{
  createDivsForColors(shuffledColors);
}
function makeRestartButton()
{
  let newRestartButton = document.createElement("button");
  newRestartButton.innerText = "RESTART GAME";
  restartButtonContainer.append(newRestartButton);
  newRestartButton.classList.add("restartbutton");

  newRestartButton.addEventListener("click", function(event){
    restartGame();
    event.target.remove();
    //alert("GAME STARTED!");
  });
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
function restartGame()
{
  shuffle(COLORS);
  removeAllChildNodes(gameContainer);
  shuffle(COLORS);
  createDivsForColors(shuffledColors);
  shuffle(COLORS);
  score = 0;
  scoreKeeper.innerHTML = `${score} / 5`;
  cardsFlipped = 0;
  firstCard = null;
  secondCard = null;
  noClicking = false;
}
function handleCardClick(event)
{
  console.log("you just clicked", event.target);
  
  if (noClicking) return;
  if (event.target.classList.contains("flipped")) return; //is card is already flipped, exit function
  let clickedCard = event.target;
  clickedCard.style.backgroundColor = clickedCard.classList[0];
  
  if(!firstCard || !secondCard)
  {
    clickedCard.classList.add("flipped");
    firstCard = firstCard || clickedCard; //dont understand
    secondCard = clickedCard === firstCard ? null : clickedCard; //dont understand
  }
  
  if (firstCard && secondCard)
  { 
    //if there is two cards picked
    noClicking = true;
  
    let firstMatch = firstCard.className;
    let secondMatch = secondCard.className;
  
    if (firstMatch === secondMatch)
    { //if they match, remove listeners (hold color) and reset card checkers
      score += 1;
      scoreKeeper.innerHTML = `${score} / 5`;

      cardsFlipped += 2;
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      firstCard = null;
      secondCard = null;
      noClicking = false;
    }
    else
    { //if they dont match, flip back and reset card checkers
      setTimeout(function() 
      {
        //remove color and remove flipped class
        firstCard.style.backgroundColor = "";
        firstCard.classList.remove("flipped");
        firstCard = null;
        secondCard.style.backgroundColor = "";
        secondCard.classList.remove("flipped");
        secondCard = null;
        noClicking = false;
      }, 1000);
    }
  }
  if (cardsFlipped === COLORS.length) {
    clickedCard.classList.add("flipped");

    scoreKeeper.innerHTML = `${score} / 5`;

    setTimeout(function() { alert("You win!"); }, 200);

    setTimeout(function() { makeRestartButton(); }, 300);
    
  }
}
