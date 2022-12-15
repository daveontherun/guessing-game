/*
- Basic equation for generating a random number that the user has to 
guess. 
- Store this random number as a variable: something like winningNumber
*/
let winNum = Math.floor((100 * Math.random()) + 1);
console.log(winNum);

/*
User querySelectorAll to return a node list (array) 
of guesses. Loop through this array and push in the 
user guesses
*/
let arr = document.querySelectorAll('#guess');

console.log(arr)

//user number prompt
const usrGuess = document.querySelector("#numIN");
const guessButton = document.querySelector("#guessBtn");
guessArr = []
let guessRemain = 5
lowGuess = `Incorrect. You have ${guessRemain} remaining. The winning number is higher`
highGuess = `Incorrect. You have ${guessRemain} remaining. The winning number is lower`
function guessNum(usrGuess, winNum) {
  if (0 >= usrGuess || usrGuess > 100) {
    return "Answer needs to be between 1-100"
  }
  while (guessRemain > 0) {
    if (usrGuess === winNum) {
      return "YOU WIN!";
    } else {
        guessRemain--;
        if (usrGuess > winNum) {
        return highGuess;
        } else {
        return lowGuess;
        
      }
    }
  } return `YOU LOSE! The winning number was ${winNum}.`;
}

//Button functionality

guessButton.addEventListener('click', () => {
    const userGV = usrGuess.value;
    const result = guessNum(userGV, winNum);
    console.log(result);
  //Use function written to compare guessing with winNum 
})
console.log(guessNum(8, 10));
console.log(guessNum(-3, 10));
console.log(guessNum(-1, 101));
console.log(guessNum(101, 10));
console.log(guessNum(-3, -3));
console.log(guessNum(-1, 0));
console.log(guessNum(101, 101));
console.log(guessNum(0, 0));

console.log(guessNum(3, 3));
console.log(guessNum(1, 1));
console.log(guessNum(100, 100));
console.log(guessNum(99, 99));
console.log(guessNum(50, 50));
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