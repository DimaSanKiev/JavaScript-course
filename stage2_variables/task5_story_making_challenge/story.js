// There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].

var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Input an adjective: " + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt("Input a verb: " + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt("Input a noun:" + questionsLeft);
alert("You're done! Ready for the message?");
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';

document.write(sentence);