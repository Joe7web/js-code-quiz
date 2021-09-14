var firstPage =  document.querySelector(".first-page");
var btnStartQuiz =  document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");


 //Make an array of objects?! Put all questions and answers in objects
 //Not sure which way
var questionsAnswers = {
questOne:"Commonly used data types DO NOT include:",
choicesOne:['1. strings', '2. booleans', '3. alerts ','4. numbers'],
correctAnsOne:['3.alerts'],

questTwo:"The condition in an if / else statement is enclosed within ______",
choicesTwo:['1. quotes','2. curly brackets', '3. parentheses','4. square brackets'],
correctAnsTwo:['3. parentheses'],

questThree:"Arrays in JavaScript can be used to store ______ when being assigned to variables",
choicesThree:['1. numbers and strings','2. other arrays','3. booleans','4. all of the above' ],
correctAnsThree:['4. all of the above'],

questFour:"String values must be enclosed within_____ when being assigned to variables.",
choicesFour:['1. commas','2. curly brackets', '3. quotes', '4. paretheses'],
correctAnsFour:['3. quotes'],

questFive:"A very useful tool used during development and debugging for printing content to the debugger is",
choicesFive:['1.JavaScript','2. terminal/bash', '3. for loops', '4. console.log'],
correctAnsFive:['4.console.log'],
 
}

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