












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