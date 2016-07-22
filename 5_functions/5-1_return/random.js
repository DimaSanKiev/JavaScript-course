function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

console.log(getRandomNumber());
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(10000));
console.log(getRandomNumber(2));
