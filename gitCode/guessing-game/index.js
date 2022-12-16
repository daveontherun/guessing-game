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
// let arr = document.querySelectorAll('#guess');

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

/*
guessButton.addEventListener('click', () => {
    let guess = Number(userInput.value);
    let arrOfGuesses = document.querySelectorAll('.guess');

    if (guess < 1 || guess > 100) {
        document.querySelector('#title').innerHTML = "You must choose a number between 1 and 100!";
    }
    else if (guessCounter === 5) {
        if (guess === winNum) {
            document.querySelector('#title').innerHTML = `Wow, you got lucky! The answer was ${winNum}`
        }
        else {
            document.querySelector('#title').innerHTML = `You have no more guesses! The answer was ${winNum}`
        }
    }
    else if (winner === true) {
        document.querySelector('#title').innerHTML = "You already won! Go touch some grass!";
    }
    else {
        while (guessCounter < 5) {
            guessCounter += 1;
            if (guess === winNum) {
                document.querySelector('#title').innerHTML = "You guessed the right number!";
                winner = true;
                for (let i = 0; i < arrOfGuesses.length; i++) {
                    if (arrOfGuesses[i].innerHTML === '') {
                        arrOfGuesses[i].innerHTML = guess;
                        break;
                    }
                }
                break;
            }
            else if (guess > winNum) {
                document.querySelector('#title').innerHTML = "You guessed too high! Guess a lower number!"
                for (let i = 0; i < arrOfGuesses.length; i++) {
                    if (arrOfGuesses[i].innerHTML === '') {
                        arrOfGuesses[i].innerHTML = guess;
                        break;
                    }
                }
                break;
            }
            else {
                document.querySelector('#title').innerHTML = "You guessed too low! Guess a higher number!"
                for (let i = 0; i < arrOfGuesses.length; i++) {
                    if (arrOfGuesses[i].innerHTML === '') {
                        arrOfGuesses[i].innerHTML = guess;
                        break;
                    }
                }
                break;
            }
        }
    }
})
/*
