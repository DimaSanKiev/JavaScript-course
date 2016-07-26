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

function print(message) {
    document.write(message);
}

for (var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    answer = questions[i][1].toUpperCase();
    input = prompt(question).toUpperCase();
    if (input === answer) {
        rightAnswers++;
        print('<p style="color: green">' + question + ' ' + input + ' – Right!</p>');
    } else {
        print('<p style="color: darkred">' + question + ' ' + input + ' – Wrong...</p>');
    }
}

print('<br/><h2>You have <b>' + rightAnswers + '</b> right answer(s).</h2>');
