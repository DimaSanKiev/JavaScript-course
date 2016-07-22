function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}

console.log(getArea(10, 20, 'sq m'));