
var startButton =  document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var timer = 25;

var firstPage =  document.querySelector(".first-page");

var firstQuestion = document.querySelector(".first-question");
var secondQuestion = document.querySelector(".second-question");
var thirdQuestion = document.querySelector(".third-question");
var fourthQuestion = document.querySelector(".fourth-question");
var fifthQuestion = document.querySelector(".fifth-question");

var firstChoices = document.querySelector("#choices-one");
var secondChoices = document.querySelector("#choices-two");
var thirdChoices = document.querySelector("#choices-three");
var fourthChoices = document.querySelector("#choices-four");
var fifthChoices = document.querySelector("#choices-five");


function startQuiz(event) {
  //start timer
 var timerFunction = setInterval(function() {
    console.log(timer)
    timer--;
    timerCount.textContent = timer;

    if(timer === 0) {
      //console.log('GAME OVER!')
      clearInterval(timerFunction)
    }

  }, 1000)

 firstPage.style.display='none';
questionSwitcher()
}

startButton.addEventListener('click', startQuiz)

//startButton.addEventListener('click', questionSwitcher)

function questionSwitcher() {
  firstQuestion.textContent = questionsArray[0].question
  firstChoices.textContent = questionsArray[0].choices[0]
  secondChoices.textContent = questionsArray[0].choices[1]
  thirdChoices.textContent = questionsArray[0].choices[2]
  fourthChoices.textContent = questionsArray[0].choices[3]

  console.log(questionsArray);
}





var questionsArray = [ 
  {
  question:"Commonly used data types DO NOT include:",
  choices:['1. strings', '2. booleans', '3. alerts','4. numbers'],
  correctAns:['3. alerts']
},
{
  question:"The condition in an if / else statement is enclosed within ______",
  choices:['1. quotes','2. curly brackets', '3. parentheses','4. square brackets'],
  correctAns:['3. parentheses'],
},
{
 question:"Arrays in JavaScript can be used to store ______ when being assigned to variables",
 choices:['1. numbers and strings','2. other arrays','3. booleans','4. all of the above' ],
 correctAns:['4. all of the above'],
},
{
  question:"String values must be enclosed within_____ when being assigned to variables.",
  choices:['1. commas','2. curly brackets', '3. quotes', '4. paretheses'],
  correctAns:['3. quotes'],
},
{
  question:"A very useful tool used during development and debugging for printing content to the debugger is",
  choices:['1.JavaScript','2. terminal/bash', '3. for loops', '4. console.log'],
  correctAns:['4.console.log'],
}

]












// for (let i =0; i < .length; i++) {

//   element  = choices[i];


// }

//  var indexOfCurrentQuestion = 4;
//we've reached the end go to scoreboard


// more something like this ?????? In an array??

// {questions:"1. text"
// choices:[1 ex,2 ex,3 ex,4 ex]
// anwer: "correct answer"}

// {questions:"2. text"
// choices:[ ex, ex, ex, ex]
// anwer: "correct answer"}

// {questions:"3. text"
// choices:[1 ex,2 ex,3 ex,4 ex]
// anwer: "correct answer"}







// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // The landing page will have a start button, when clicked 
    //will initiate the first page with questions and start the timer.

// WHEN I answer a question
// THEN I am presented with another question
   //These are multiple choice questions with clickable choices.
   // If answered correctly - will state "Correct!" and
   //add '10' to the score and move to next question. There are
   // 5 questions total.
   // The score will continue to add each correct score to score total.
   

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
  // If answer incorrectly - will state "Wrong!" and
  //will  reduce 12 seconds from the clock.  

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    // Will switch to different page "All done!"

// WHEN the game is over
// THEN I can save my initials and my score
   // Will have space to enter intials and see final score.
   //These score will be stored in local storage.
   //"View High Scores" in top left corner will be clickable to see the scores 
   //from highest to lowest 