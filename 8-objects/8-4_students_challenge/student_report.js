var message;
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport() {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}

while (true) {
    search = prompt('Please input student\'s name [John] (or type \'quit\' to exit):');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    } else {
        for (var i = 0; i < students.length; i++) {
            student = students[i];
            if (student.name === search) {
                message = getStudentReport(student);
                print(message);
            }
        }
    }
}