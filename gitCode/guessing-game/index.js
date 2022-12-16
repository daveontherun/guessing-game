/*
- Basic equation for generating a random number that the user has to 
guess. 
- Store this random number as a variable: something like winningNumber
*/
let winNum = Math.floor(100 * Math.random() + 1);

const usrNum = document.querySelector("#numIn");

//initialize array and reminaing number of attempts
let attemptsArr = [];
let maxAtt = 5;
let attRemain
 = maxAtt - attemptsArr.length;

// messages displayed when theguess is low or high
low = `Incorrect. You have ${attRemain
} remaining. The winning number is higher`;
high = `Incorrect. You have ${attRemain
} remaining. The winning number is lower`;

function guessNum(usrNum, winNum) {
  //check if user's guess is valid
  if (0 >= usrNum || usrNum > 100) {
    return "Answer needs to be between 1-100";
  } //check if user's guess is correct
  if (usrNum === winNum) {
    return "YOU WIN!";
  } //check if user has remaining attempts
  if (attRemain
     > 0) {
    let attempts = document.querySelectorAll(".attempts");
    let chance = document.querySelectorAll(".guess");

    //loop through attempts
    for (let i = 0; i < attemptsArr.length; i++) {
      chance[i].textContent = attempts[i];
    }
    //add to list of attempts and subtract from remaining attempts
    console.log(attemptsArr.push(usrNum))
    attRemain--;
    console.log(attRemain
      , attemptsArr)
    if (usrNum > winNum) {
      return high;
    } else {
      return low;
    
    }
  }
  console.log(attRemain
    , attemptsArr);
  //return once user runs out of attempts they have lost
  return `YOU LOSE! The winning number was ${winNum}.`;
}

//Button functionality
const guessButton = document.querySelector("#guessBtn");
guessButton.addEventListener("click", () => {
  const userGV = usrNum.value;
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

/*
Here's some code I was writing while we were working earlier. 
Just a different way to skin a cat, in case you were interested in 
taking a look. 

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
    while(guessCounter < 5) {
      guessCounter +=1;
      if (guess === winNum) {
        document.querySelector('#title').innerHTML = "You guessed the right number!";
        winner = true;
        for (let i = 0; i< arrOfGuesses.length; i++) {
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

*/