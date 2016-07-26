var questions = [
    ['What is the name of a markup language for describing web documents (web pages)?', 'HTML'],
    ['What language describes how HTML elements are to be displayed on screen, paper, or in other media?', 'CSS'],
    ['What is the name of a powerful and popular language for programming on the web?', 'JavaScript'],
    ['What is a name of standard language for accessing databases?', 'SQL'],
    ['What is the most popular programming language?', 'Java']
];
var rightAnswers = 0;
var question;
var answer;
var input;
var correctAnswers = [];
var wrongAnswers = [];

function print(message) {
    document.write(message);
}

function printList(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i][0] + ' -' + list[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

for (var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    answer = questions[i][1].toUpperCase();
    input = prompt(question).toUpperCase();
    if (input === answer) {
        rightAnswers++;
        correctAnswers.push([question, input]);
    } else {
        wrongAnswers.push([question, input]);
    }
}

print('<br/><h2>You got <b>' + rightAnswers + '</b> right answer(s).</h2>');

if (correctAnswers.length > 0) {
    print('<p style="color: green">You got these question(s) correct:</p>');
    printList(correctAnswers);
    if (wrongAnswers.length === 0) {
        print('<p>You haven\'t any incorrect answers, congratulations!</p>');
    }
}

if (wrongAnswers.length > 0) {
    print('<p style="color: darkred">You got these question(s) wrong:</p>');
    printList(wrongAnswers);
    if (correctAnswers.length === 0) {
        print('<p>Sorry, all your answers are wrong... Study more and try again.</p>');
    }
}
