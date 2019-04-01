$(document).ready(function () {
var menuButton = $('#menuButton'),
    menu = $('#menuResp'),
    menuAnimSlideIn = {"top": "128px", "easing": "swing"},
    menuAnimSlideOut = {"top": "-128px", "easing": "swing"},
    showMenu = false;

$(menuButton).click(function (event) {
        if (!showMenu) {
            showMenu = true;
            $(menu).animate(menuAnimSlideIn, 100);
        } else {
            showMenu = false;
            $(menu).animate(menuAnimSlideOut, 100);
        }
    });
});