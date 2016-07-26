var playList = [
    ['Time Is The Healer (Monada Bootleg Dub)', 'Riva'],
    ['Marcel Woods & W&W', 'Trigger'],
    ['Filmic (Ruben de Ronde Remix)', 'Above & Beyond'],
    ['200 (FSOE 200 Anthem)', 'Aly & Fila'],
    ['An Angel\'s Love (Vocal Mix)', 'Alex M.O.R.P.H. feat. Sylvia Tosun'],
    ['Black Is The Color (Richard Durand Cara Dillion Vs. 2 Devine rmx)', 'DJ vEQ']
];

function print(message) {
    document.write(message);
}

function printSongs(songs) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li><b>' + songs[i][0] + '</b> by <b>' + songs[i][1] + '</b></li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printSongs(playList);





















