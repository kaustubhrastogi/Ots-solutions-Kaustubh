let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");

// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);
  previousGuesses.push(guess)
  document.getElementById("guessField").value=''
  const guessesRemaining = document.querySelector(".lastResult").innerHTML=numberOfAttempts-1;
  const guessSlot = document.querySelector(".guesses").innerHTML=previousGuesses;
if (numberOfAttempts==0) {
  alert("No remaining attempts")
  location.reload()
}
  if (guess === randomNumber) {
    alert("You guessed it correctly!");
    location.reload()
  }
   else if (guess > randomNumber) {
     alert("You guessed it more!");
    numberOfAttempts--;
  } else {
    alert("You guessed it less!");
    numberOfAttempts--;
  }
}
