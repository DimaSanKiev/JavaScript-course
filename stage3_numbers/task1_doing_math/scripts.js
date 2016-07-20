var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day');

var x = 32;
var yearsalive = document.write('<br>I\'ve been alive for more than ' + x * secondsPerDay * daysPerWeek * weeksPerYear + ' seconds.');