/*
 The join() method takes an array and returns a string with all the items in the array
 separated by a supplied character, such as comma or a colon.
 This is a great way to display all the items in an array in a single line.
 */

/*
 Another useful method is concat(). It can be used to add one list to another.
 */

/*
 The indexOf() method lets to search an array for a particular value. If the value is in
 the list, than that element's position is returned. However, if the item is not in the list,
 then the indexOf() method returns the value -1.
 */

var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot',
    'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
    document.write('<p>' + message + '</p>');
}

while (true) {
    search = prompt('Search for a product in our store. Type \'list\' to show all of the' +
        ' produce and \'quit\' to exit');
    search = search.toLowerCase();
    if (search === 'quit') {
        break;
    } else if (search === 'list') {
        print(inStock.join(', '));
    } else {
        if (inStock.indexOf(search) > -1) {
            print('Yes, we have ' + search + ' in the store.');
        } else {
            print('– ' + search + ' is not in stock.');
        }
    }
}