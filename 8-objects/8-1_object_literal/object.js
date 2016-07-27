/*
 Example of a JavaScript object
 */

// creating object
var person = {
    name: 'Jenny',
    country: 'Brazil',
    age: 25,
    student: false,
    skills: ['JavaScript', 'HTML', 'CSS']
};


function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

// accessing object properties
var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';
print(message);