// quiz begins, no answers correct
var correctAnswers = 0;
alert('Please answer the 5 following questions.');

// ask questions
var answer1 = prompt('How much seconds does it take for light to reach the Moon from the Earth?');
if (parseInt(answer1) === 1) {
    correctAnswers += 1;
}
var answer2 = prompt('What is the capital of Australia?');
if (answer2.toUpperCase() === 'CANBERRA') {
    correctAnswers += 1;
}
var answer3 = prompt('A brick weighs 1kg plus a half of a brick. How much kilograms does a brick weigh?');
if (parseInt(answer3) === 2) {
    correctAnswers += 1;
}
var answer4 = prompt('What is the most popular programming language in 2016?');
if (answer4.toUpperCase() === 'JAVA') {
    correctAnswers += 1;
}
var answer5 = prompt('What is the major chemical element human body consists of?');
if (answer5.toUpperCase() === 'OXYGEN' || answer5.toUpperCase() === 'O2' || answer5.toUpperCase() === 'O') {
    correctAnswers += 1;
}

// output results
document.write('<p>You got ' + correctAnswers + ' out of 5 questions correct</p>');

// output rank
if (correctAnswers === 5) {
    document.write('<p><strong>You won a GOLD medal!</strong></p>');
} else if (correctAnswers >= 3) {
    document.write('<p><strong>You won a SILVER medal!</strong></p>');
} else if (correctAnswers >= 1) {
    document.write('<p><strong>You won a BRONZE medal!</strong></p>');
} else {
    document.write('<p><strong>Sorry, you need to study more, try again later.</strong></p>')
}
