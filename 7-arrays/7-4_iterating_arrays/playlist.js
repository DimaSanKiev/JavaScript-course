var playList = [
    'Time Is The Healer',
    'Trigger',
    'Filmic',
    'Anthem',
    'Angel\'s Love',
    'Black Is The Color'
];

function print(message) {
    document.write(message);
}

function printList(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i++) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printList(playList);