$(document).ready(function () {
var menuButton = $('#menuButton'),
    menu = $('#menuResp'),
    menuAnimSlideIn = {"top": "128px", "easing": "swing"},
    menuAnimSlideOut = {"top": "0px", "easing": "swing"},
    showMenu = false;

$(menuButton).click(function (event) {
        if (!showMenu) {
            showMenu = true;
            $(menu).animate(menuAnimSlideIn, 300);
        } else {
            showMenu = false;
            $(menu).animate(menuAnimSlideOut, 500);
        }
    });
});