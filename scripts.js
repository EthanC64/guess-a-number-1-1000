console.log("scriptIsrunning");
console.log(text);
if (theRandomNumber == guessNumber) {
  alert("correct");
}

if (theRandomNumber > guessNumber) {
  alert("too low");
}

if (theRandomNumber < guessNumber) {
  alert("too high");
}

var guessNumber = prompt("guess a number 1-1000");

if (theRandomNumber == guessNumber) {
  alert("correct");
}

if (theRandomNumber > guessNumber) {
  alert("too low");
}

if (theRandomNumber < guessNumber) {
  alert("too high");
}

document.querySelector(".guessedNum").value;
