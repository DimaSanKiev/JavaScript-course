var html = '';
var student;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i++) {
    student = students[i];
    html += '<h2>Student: ' + student.name + '</h2>';
    html += '<p>Track: ' + student.track + '</p>';
    html += '<p>Achievements: ' + student.achievements + '</p>';
    html += '<p>Points: ' + student.points + '</p>';
    html += '</br>';
}

print(html);