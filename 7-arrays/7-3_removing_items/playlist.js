var nums = [1, 2, 3, 4, 5];
var num;

// The pop() method removes the last element from an array and returns that element.
nums.pop();    // now the nums == [1, 2, 3, 4]
num = nums.pop();    // num == 4; nums == [1, 2, 3]

// The shift() method removes the first element from an array and returns that element.
// This method changes the length of the array.
nums.shift();    // now the nums == [2, 3]
num = nums.shift();    // num == 2; nums == [3]
