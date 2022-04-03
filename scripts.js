var tries = 0;
var wins = 0;
// computer picks a number
var computerPick = Math.floor(Math.random() * 1000);
console.log(computerPick);

var playGame = function (e) {
  e.preventDefault();

  // user picks a number between
  var userPick = document.querySelector("#user-input").value;
  console.log("userPick", userPick, computerPick);

  // update tries
  tries++;
  document.querySelector("#tries").textContent = tries;

  console.log(tries, tries >= 10);
  if (tries >= 10) {
    // show message
    document.querySelector("#message-box").textContent =
      "You lose, sell your computer!";

    // reset tries
    tries = 0;

    // pick new number
    computerPick = Math.floor(Math.random() * 1000);
    console.log(computerPick);

    return;
  }

  // determine a winner and add to winner
  if (userPick == computerPick) {
    // show message
    document.querySelector("#message-box").textContent = "You win!";

    //reset Tries
    tries = 0;

    // add on the win count
    wins++;
    document.querySelector("#wins").textContent = wins;
  } else {
    if (userPick > computerPick) {
      document.querySelector("#message-box").textContent = "Too High!";
    } else {
      document.querySelector("#message-box").textContent = "Too Low!";
    }
  }
};

document.querySelector("#submit").addEventListener("click", playGame);

// add to number tries left - alert you lose and reset the game

// console.log("scriptIsrunning");
// console.log(text);
// if (theRandomNumber == guessNumber) {
//   alert("correct");
// }

// if (theRandomNumber > guessNumber) {
//   alert("too low");
// }

// if (theRandomNumber < guessNumber) {
//   alert("too high");
// }

// var guessNumber = prompt("guess a number 1-1000");

// if (theRandomNumber == guessNumber) {
//   alert("correct");
// }

// if (theRandomNumber > guessNumber) {
//   alert("too low");
// }

// if (theRandomNumber < guessNumber) {
//   alert("too high");
// }

// document.querySelector(".guessedNum").value;
