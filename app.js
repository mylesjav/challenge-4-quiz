var winEl = document.querySelector("")
var lossesEl = document.querySelector("")
var timerEl = document.querySelector("")
var startGameButtonEl = document.querySelector("")
var gameBoardEl = document.querySelector("")
var gameResultEl = document.querySelector("")
var gameDisplayEl = document.querySelector("")
var controlsEl = document.querySelector("")

var wins = 0;
var losses = 0;
var timer = null;
var timeLeft = 0;
var currentWordIndex:
var currentGuess =[];

var KWordList = [
    "variable",
    "style",
    "markdown",
    "javascript",
];

var kDuraion = 20;
var kStorageKey   = "week-4-activity-28-scores"

//Event - page load
function init() {
    console.log("Game is loading") 


// retrieve data
    var scores = JSON.parse(localStorage.getItem("kStorageKey"))

// update state    
    if(scores) {
        wins = scores.wins;
        losses = score.losses;
    } 
}

//Event - click start
function handleClickStart(ev) {
    console.log("Game starting now!");

if (!timer) {

    // set the time left
    timeLeft = kDuration;
    // start a timer
    timer = setInterval(handleTimerTick, 1000)
    // choose a word from list
    currentWordIndex = math.floor(math.random() * KWordList.lenth);
    // set current guess
    currentGuess = new Array(KWordList[currentWordIndex].length).fill("_");
}

    // hide the start button
    hideElement(controlsEl);


//choose word from list

//set time left

//set the current guess

//reset the display
// hide any result message
hideElement(gameResultEl);
//show timer
 showElement(timerEl);
 // show gameboard
 showElement(gameBoardEl);
  


}
startGameButtonEl.addEventListener("click", handleClickStart)
//Event - timer tick
function handleTimerTick(ev) {
    timerLeft--;
    console.log("timer is ticking", timerLeft);


timerEl.textContent = timeLeft;
if(timeLeft === 0 ) {
    handleGameEnds(false);
}
}
//Event - type letter
function handleKeyDown(ev) {
console.log("key pressed:", ev.key);
}
document.addEventListener("keydown", handleKeyDown);
 
//Event - end of game
  function handleGameEnds(didWin) {
    clearInterval(timer);
    timer = null;

    //update State
    if(didWin) {
        wins++;
    } else {
        losses++;
    }

    localStorage.setItem(kStorageKey, JSON.stringify({wins, losses}))
  }
 
    //Update UI

    // display result message
    updateScoreboard
function updateScoreboard() {
    //Update UI
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
}

function hideElement(el) {
    el.classList.add("hide");
}

function showElement(el) {
    el.classList.remove("hide");
} 

function displayResult(didWin) {
    gameResultEl.classList.remove = "success";
    gameResultEl.classList.remove = "failure";
    hideElement(timerEl);
        
        if(didWin) {
            gameResultEl.textContent = "You Win!";
            gameResultEl.classList.add = "success";
        } else {
            gameResultEl.textContent = "You Lost!";
            gameResultEl.classList.add = "failure";
        }
}

// Game start
init();