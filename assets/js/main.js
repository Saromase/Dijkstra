$(document).ready(function() {
    $('#generate').click(function() {
        generatePath();

    });
});

function generatePath() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var currentId = (i + 1) + ',' + (j + 1);
            var insert = '<div id="' + currentId +'"></div>';
            $(insert).appendTo('#game').addClass('floor');
        }
    }
}
