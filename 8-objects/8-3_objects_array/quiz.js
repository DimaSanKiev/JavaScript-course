var questions = [
    {
        question: 'What is the name of a markup language for describing web documents (web pages)?',
        answer: 'HTML'
    },
    {
        question: 'What language describes how HTML elements are to be displayed on screen, paper, or in other media?',
        answer: 'CSS'
    },
    {
        question: 'What is the name of a powerful and popular language for programming on the web?',
        answer: 'JavaScript'
    },
    {
        question: 'What is a name of standard language for accessing databases?',
        answer: 'SQL'
    },
    {
        question: 'What is the most popular programming language?',
        answer: 'Java'
    }
];

var rightAnswers = 0;
var question;
var answer;
var input;
var correctAnswers = [];
var wrongAnswers = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i][0] + ' -' + list[i][1] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < questions.length; i++) {
    question = questions[i].question;
    answer = questions[i].answer.toUpperCase();
    input = prompt(question).toUpperCase();
    if (input === answer) {
        rightAnswers++;
        correctAnswers.push([question, input]);
    } else {
        wrongAnswers.push([question, input]);
    }
}

report = '<br/><h2>You got <b>' + rightAnswers + '</b> right answer(s).</h2>';

if (correctAnswers.length > 0) {
    html += '<p style="color: green">You got these question(s) correct:</p>';
    html += buildList(correctAnswers);
    if (wrongAnswers.length === 0) {
        html += '<p>You haven\'t any incorrect answers, congratulations!</p>';
    }
}

if (wrongAnswers.length > 0) {
    html += '<p style="color: darkred">You got these question(s) wrong:</p>';
    html += buildList(wrongAnswers);
    if (correctAnswers.length === 0) {
        html += '<p>Sorry, all your answers are wrong... Study more and try again.</p>';
    }
}

print(html);