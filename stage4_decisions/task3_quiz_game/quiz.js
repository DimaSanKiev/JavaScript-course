var correctAnswers = 0;
alert('Please answer the 5 following questions.');

var question1 = prompt('How much seconds does it take for light to reach the Moon from the Earth?');
if (parseInt(question1) === 1) {
    correctAnswers += 1;
}

var question2 = prompt('What is the capital of Australia?');
if (question2.toUpperCase() === 'CANBERRA') {
    correctAnswers += 1;
}

var question3 = prompt('A brick weighs 1kg plus a half of a brick. How much kilograms does a brick weigh?');
if (parseInt(question3) === 2) {
    correctAnswers += 1;
}

var question4 = prompt('What is the most popular programming language?');
if (question4.toUpperCase() === 'JAVA') {
    correctAnswers += 1;
}

var question5 = prompt('What is the major chemical element human body consists of?');
if (question5.toUpperCase() === 'OXYGEN' || question5 === 'O2' || question5 === 'O') {
    correctAnswers += 1;
}

if (correctAnswers === 5) {
    document.write('<p>Congratulations! You have ' + correctAnswers + ' correct answers</p>');
    document.write('<p>You won a GOLD medal!</p>');
} else if (3 <= correctAnswers <= 4) {
    document.write('<p>Congratulations! You have ' + correctAnswers + ' correct answers</p>');
    document.write('<p>You won a SILVER medal!</p>');
} else if (1 <= correctAnswers <= 2) {
    document.write('<p>You have ' + correctAnswers + ' correct answers</p>');
    document.write('<p>You won a BRONZE medal!</p>');
} else {
    document.write('<p>Sorry, you have ' + correctAnswers + ' right answers.</p>')
    document.write('<p>Try again later.</p>')
}
