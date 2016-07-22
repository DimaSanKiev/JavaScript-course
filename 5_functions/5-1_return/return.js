function isEmailEmpty() {
    var field = document.getElementById('email');
    return field.value === '';
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert('Please provide your email address.')
}