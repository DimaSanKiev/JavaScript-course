var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

while (guessCount < 10) {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        break;
    }
}

if (correctGuess) {
    document.write("<h1>You guessed the number!</h1>");
    document.write("<h2>It took you <strong>" + guessCount + "</strong> tries to guess the number " +
        "<strong>" + randomNumber + "</strong>.</h2>");
} else {
    document.write("<h1>Sorry you did not guess the number!</h1>");
}