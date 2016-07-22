function generateRandomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var min = parseInt(prompt('Insert the lower number:'));
var max = parseInt(prompt('Insert the upper number:'));
var random = generateRandomNumber(min, max);

document.write('<p>The random number between ' + min + ' and ' + max + ' is ' + random + '.</p>');