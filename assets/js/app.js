var winEl = document.querySelector(".win");
var lossesEl = document.querySelector(".losses");
var timerEl = document.querySelector("#timer");
var startGameButtonEl = document.querySelector("#start-btn");
var gameBoardEl = document.querySelector(".gameBoard");
var gameResultEl = document.querySelector(".gameResult");
var gameDisplayEl = document.querySelector(".gameDisplay");
var controlsEl = document.querySelector(".controls");

var wins = 0;
var losses = 0;
var timer;
var timeLeft = 0;
var currentWordIndex;
var currentGuess = [];
var scorePoints= 100
var maxQuestions = 5



var kDuration = 20;

var questions = [
  {
    question: "Commonly used data types do not include",
    answers: [" 1.  Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "Option 2",
  },
  {
    question: "The the condition of if/else statement is enclosed with ______?",
    answers: [" 1. Quotes ", "2. Curly Brackets", "3. Parenthesis "],
    correctAnswer: "Option 3",
  },
  {
    question: "Arrays in javascript can be used to store _______",
    answers: [" 1.  Strings", "2. Booleans", "3. Alerts", "4. All of the above"],
    correctAnswer: "Option 4",
  },
  {
    question: "String Values must be enlosed within _______ when being assigned to variables",
    answers: [" 1.  Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "Option 2",
  },
  {
    question: "A very useful tool used during development ",
    answers: [" 1.  Javascript", "2. Terminal/bash", "3. For loops", "4. Console.log"],
    correctAnswer: "Option 2",
  }
  // More questions...
];
let currentQuestionIndex = 0

//Event - page load
function init() {
  console.log("Game is loading");



  // update state
  if (scores) {
    wins = scores.wins;
    losses = scores.losses;
  }
}

//Event - click start
function handleClickStart(ev) {
    if (!timer) {
    // set the time left
    timeLeft = kDuration;
    // start a timer
    timer = setInterval(handleTimerTick, 1000);
    // choose a word from list
    currentWordIndex = Math.floor(Math.random() * kWordList.length);
  console.log("Game starting now!");
}
}



// hide the start button
// hideElement(controlsEl);

// //set time left

// //set the current guess

// //reset the display
// // hide any result message
// hideElement(gameResultEl);
// //show timer
// showElement(timerEl);
// // show gameboard
// showElement(gameBoardEl);

//Event - timer tick
function handleTimerTick(ev) {
  timeLeft--;
  console.log("timer is ticking", timeLeft);

  timerEl.textContent = timeLeft;
  if (timeLeft <=0) {
    handleGameEnds(false);
  }
}
//Event - type letter
function handleKeyDown(ev) {
  console.log("key pressed:", ev.key);

  if (timer && kAllowedKeys.includes(ev.key)) {
    if (
      !currentGuess.includes(ev.key) &&
      kWordList[currentWordIndex].includes(ev.key)
    ) {
      currentGuess = kWordList[currentWordIndex]
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

    if (currentGuess.join("") === kWordList[currentWordIndex]) {
      handleGameEnds(true);
    }
  }
}

function showQuestions(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answers => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answersButton.appendChild(button);
    if(answers.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
  });
}



//Update UI

// display result message


function quizEnd() {
  clearInterval(timerId);
  // Display final score
  document.getElementById('score-final').textContent = time;
}
  


function saveHighscore() {
  let name = document.getElementById('name').value.trim();
  if (name !== "") {
      let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
      let newScore = { score: time, name: name };
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
      alert("Your Score has been Submitted");
  }
}

// Game start

startGameButtonEl.addEventListener("click", handleClickStart);
document.getElementById('submit-score').onclick = saveHighscore;
document.getElementById('view-high-scores').onclick = printHighscores;


init();

////////////////////////////////////////////////////////
/// Instructor Quiz                                /////
////////////////////////////////////////////////////////
// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     // Display the first question
//     displayQuestion(questions[currentQuestionIndex]);
// }

// function displayQuestion(question) {
//     // Code to display the question and options
// }

// function checkAnswer(answer) {
//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//         score++;
//     }

//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         displayQuestion(questions[currentQuestionIndex]);
//     } else {
//         alert("Quiz over. Your score is " + score);
//     }
// }

// document.getElementById('start-btn').addEventListener('click', startQuiz);

// let timeRemaining = 10; // 10 seconds
// let countdownTimerId = setInterval(() => {
//     if (timeRemaining > 0) {
//         timeRemaining--;
//         console.log(timeRemaining);
//     } else {
//         clearInterval(countdownTimerId);
//         alert("Time's up!");
//     }
// }, 1000);

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
