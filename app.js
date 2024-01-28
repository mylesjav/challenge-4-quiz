var winEl = document.querySelector(".win")
var lossesEl = document.querySelector(".losses")
var timerEl = document.querySelector(".timer")
var startGameButtonEl = document.querySelector(".startGameButton")
var gameBoardEl = document.querySelector(".gameboard")
var gameResultEl = document.querySelector(".gameResult")
var gameDisplayEl = document.querySelector(".gameDisplay")
var controlsEl = document.querySelector(".controls")

var wins = 0;
var losses = 0;
var timer = null;
var timeLeft = 0;
var currentWordIndex;
var currentGuess = [];

var KWordList = [
    "variable",
    "style",
    "markdown",
    "javascript",
];

var kDuraion = 20;
var kStorageKey   = "week-4-activity-28-scores";
var kAllowedKeys = "abcdefghijklmnopqrstuvwxyz";

//Event - page load
function init() {
    console.log("Game is loading") 


// retrieve data
    var scores = JSON.parse(localStorage.getItem(kStorageKey))

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
    currentWordIndex = math.floor(math.random() * kWordList.lenth);
    // set current guess
    currentGuess = new Array(kWordList[currentWordIndex].length).fill("_");
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

if(timer && kAllowedKeys.includes(ev.key)) {
    if(!currentGuess.includes(ev.key) && 
     KWordLis[currentWordIndex].includes(ev.key)
     ) {
        currentGuess = KWordList[currentWordIndex]
        .split("")
        .map(function (letter, index) {
            if (letter === ev.key) {
                return letter;
            }
            return currentGuess[index];
        });
     }
     // update UI
     updateWordDisplay();

     if(currentGuess.join("") === KWordList[currentWordIndex]) {
        handleGameEnds(true);
     }

    }
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
    gameResultEl.classList.remove("success"); 
    gameResultEl.classList.remove("failure");
    hideElement(timerEl);
        
        if(didWin) {
            gameResultEl.textContent = "You Win!";
            gameResultEl.classList.add("success");
        } else {
            gameResultEl.textContent = "You Lost!";
            gameResultEl.classList.add("failure");
        }
        showElement(gameResultEl);

    function updateWordDisplay(){
        gameDisplayEl.textContent = currentGuess.join(" ");
    }
}

// Game start
init();