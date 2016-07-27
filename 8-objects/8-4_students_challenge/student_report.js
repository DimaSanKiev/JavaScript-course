var message;
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport(results) {
    var report = '';
    for (var i = 0; i < results.length; i++) {
        report += '<h2>Student: ' + results[i].name + '</h2>';
        report += '<p>Track: ' + results[i].track + '</p>';
        report += '<p>Achievements: ' + results[i].achievements + '</p>';
        report += '<p>Points: ' + results[i].points + '</p>';
    }
    return report;
}

while (true) {
    var results = [];
    message = '';
    search = prompt('Please input student\'s name [John] (or type \'quit\' to exit):');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    } else {
        for (var i = 0; i < students.length; i++) {
            student = students[i];
            if (student.name === search) {
                results.push(student);
            }
            message = getStudentReport(results);
            print(message);
        }
        results.length = 0;
        if (message === '') {
            message = '<h2>There is no such student with name ' + search + '.</h2>';
            print(message);
        }
    }
}