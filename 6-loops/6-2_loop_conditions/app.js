/*
 1. Generate a random number from 1 to 10000. This is the number the computer need to guess.
 2. Enter a while loop - inside this loop the computer will "guess" a random number. If the number
    the computer guesses matches the number generated at the beginning of the program, the loop ends,
    if not, the loop continues until the correct number is guessed.
 3. Exit the loop and print the random number and the number of times the computer to guess it.
 */

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}
document.write("<p>The random number was: <strong>" + randomNumber + "</strong>.</p>");
document.write("<p>It took the computer <strong>" + attempts + "</strong> attempts to get it right.</");