"<h2>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</h2>"

var adjective = prompt("Input an adjective:");
var sentence = "<h2>There once was a " + adjective;
var verb = prompt("Input a verb:");
var noun = prompt("Input a noun:");
alert("You're done! Ready for the message?");
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';

document.write(sentence);