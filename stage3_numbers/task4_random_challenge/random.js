var min = parseInt(prompt('Please input minimum number:'));
var max = parseInt(prompt('Please input maximum number:'));

var random = Math.floor(Math.random() * (max - min + 1)) + min;
var message = 'The random number from ' + min + ' and ' + max + ' is ' + random;

document.write(message);