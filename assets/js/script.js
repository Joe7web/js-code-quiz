
var startButton =  document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var timer = 25;

var firstPage =  document.querySelector(".first-page");
var pTag = document.querySelector(".pTag")
var countDownText = document.querySelector(".count-down")
var firstQuestion = document.querySelector(".first-question");
var qandA = document.querySelector(".questions-answers");

var firstChoices = document.querySelector("#choices-one");
var secondChoices = document.querySelector("#choices-two");
var thirdChoices = document.querySelector("#choices-three");
var fourthChoices = document.querySelector("#choices-four");
var fifthChoices = document.querySelector("#choices-five");

//setting styles for elements
firstPage.setAttribute("style", "text-align: center; margin-top:40px;")
pTag.setAttribute("style", "font-size: 20px;")
countDownText.setAttribute("style", "font-size: 30px; font-weight: bold; margin-leftgit s: 40px;")
qandA.setAttribute("style", "font-size: 20px; text-align:center;")


function startQuiz(event) {
  //start timer and first question
 var timerFunction = setInterval(function() {
    console.log(timer)
    timer--;
    timerCount.textContent = timer;

    if(timer === 0) {
      
      clearInterval(timerFunction)
    }

  }, 1000)

 firstPage.style.display='none';
questionSwitcher()
}

startButton.addEventListener('click', startQuiz)



function questionSwitcher() {
  firstQuestion.textContent = questionsArray[0].question
  firstChoices.textContent = questionsArray[0].choices[0]
  secondChoices.textContent = questionsArray[0].choices[1]
  thirdChoices.textContent = questionsArray[0].choices[2]
  fourthChoices.textContent = questionsArray[0].choices[3]

  firstQuestion.textContent = questionsArray[1].question
  firstChoices.textContent = questionsArray[1].choices[0]
  secondChoices.textContent = questionsArray[1].choices[1]
  thirdChoices.textContent = questionsArray[1].choices[2]
  fourthChoices.textContent = questionsArray[1].choices[3]

  firstQuestion.textContent = questionsArray[2].question
  firstChoices.textContent = questionsArray[2].choices[0]
  secondChoices.textContent = questionsArray[2].choices[1]
  thirdChoices.textContent = questionsArray[2].choices[2]
  fourthChoices.textContent = questionsArray[2].choices[3]

  firstQuestion.textContent = questionsArray[3].question
  firstChoices.textContent = questionsArray[3].choices[0]
  secondChoices.textContent = questionsArray[3].choices[1]
  thirdChoices.textContent = questionsArray[3].choices[2]
  fourthChoices.textContent = questionsArray[3].choices[3]

  firstQuestion.textContent = questionsArray[4].question
  firstChoices.textContent = questionsArray[4].choices[0]
  secondChoices.textContent = questionsArray[4].choices[1]
  thirdChoices.textContent = questionsArray[4].choices[2]
  fourthChoices.textContent = questionsArray[4].choices[3]

}
//array of questions and multiple choice questions for quiz

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
},

]












