/*
- Basic equation for generating a random number that the user has to 
guess. 
- Store this random number as a variable: something like winningNumber
*/
let winNum = Math.floor(100 * Math.random() + 1);

const usrGuess = document.querySelector("#numIn");

//initialize array and reminaing number of attempts
let attemptsArr = [];
let maxGuess = 5;
let guessRemain = maxGuess - attemptsArr.length;

// messages displayed when theguess is low or high
lowGuess = `Incorrect. You have ${guessRemain} remaining. The winning number is higher`;
highGuess = `Incorrect. You have ${guessRemain} remaining. The winning number is lower`;

function guessNum(usrGuess, winNum) {
  //check if user's guess is valid
  if (0 >= usrGuess || usrGuess > 100) {
    return "Answer needs to be between 1-100";
  } //check if user's guess is correct
  if (usrGuess === winNum) {
    return "YOU WIN!";
  } //check if user has remaining attempts
  if (guessRemain > 0) {
    let attempts = document.querySelectorAll(".attempts");
    let chance = document.querySelectorAll(".guess");

    //loop through attempts
    for (let i = 0; i < attemptsArr.length; i++) {
      chance[i].textContent = attempts[i];
    }
    //add to list of attempts and subtract from remaining attempts
    console.log(attemptsArr.push(usrGuess))
    guessRemain--;
    console.log(guessRemain, attemptsArr)
    if (usrGuess > winNum) {
      return highGuess;
    } else {
      return lowGuess;
    
    }
  }
  console.log(guessRemain, attemptsArr);
  //return once user runs out of attempts they have lost
  return `YOU LOSE! The winning number was ${winNum}.`;
}

//Button functionality
const guessButton = document.querySelector("#guessBtn");
guessButton.addEventListener("click", () => {
  const userGV = usrGuess.value;
  const result = guessNum(userGV, winNum);
  console.log(result);
  //Use function written to compare guessing with winNum
});

/*
Users guesses (Maybe use an array with the length of 5 to store the
guesses)
*/

//Reset Button
let resetButton = document.querySelector("#resetButton");

// resetButton.addEventListener("click", () => {
/*
  Have this function return the user to the main html page
  (refresh the page)
  */
// })
