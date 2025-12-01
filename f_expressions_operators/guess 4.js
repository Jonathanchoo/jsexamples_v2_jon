let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

while (userInput !== 'q') {

  if (Number(userInput) === 10) {                         // correct answer, provide an alert
    alert("You are correct");
    break;
  }
  else if (!userInput) {                                  // input empty string, provide an alert and prompt
    userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
  }
  else {                                                  // wrong answer, provide an alert and prompt
    const hint = (userInput < ans) ? "Higher" : "Lower";   // provide hints to the user (on the range)

    alert(`Answer incorrect. ${hint} number please.`);
    userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
  }
}
let correctAns = false; // flag (instantiated as false)
let feedback = ""; // message placeholder (instantiated as empty string "")

switch (true) {
  case (Number(userInput) === ans): // answer is correct
    correctAns = true;
    feedback = feedbackCorrect;
    break;

  case (!userInput): // answer is empty
    correctAns = false;
    feedback = feedbackEmpty;
    break;

  case (Number(userInput) > ans): // answer is too high
    correctAns = false;
    feedback = feedbackTooHigh;
    break;

  case (Number(userInput) < ans): // answer is too low
    correctAns = false;
    feedback = feedbackTooLow;
    break;

  default:
    correctAns = false;
    feedback = feedbackWrong;
}

alert(feedback);               // give the user the needed feedback first

if (correctAns) {               // If answer is correct
  break;                        // end the trivia
}

// Otherwise (answer is wrong), continue to ask for input.
userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();

