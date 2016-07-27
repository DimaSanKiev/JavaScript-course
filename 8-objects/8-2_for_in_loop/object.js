var person = {
    name: 'Jenny',
    country: 'Brazil',
    age: 25,
    student: false,
    skills: ['JavaScript', 'HTML', 'CSS']
};

// Using for...in loop for a quick spin and print results out to the console.
for (prop in person) {
    console.log(prop, ': ', person[prop]);
}