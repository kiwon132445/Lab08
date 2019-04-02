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
    
    // CLEAR THE PAGE
    $('.home').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();
        $("#main2").html("");
    });
    
    // GET A LIST OF TIMELINES FROM THE SERVER AS HTML DATA
    $('.timelines').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list1",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#main2").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
    
    // GET A LIST OF CHARACTERS FROM THE SERVER AS HTML DATA
    $('.characters').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list2",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#main2").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });


    // GET A LIST OF BOSSES FROM THE SERVER AS JSON DATA
    $('.bosses').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list1",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#main2");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li><div>" + "<img src='"+ data[i].imagePath + "'>" + "<p>" + data[i].description + "</p>" + "</div></li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
    
    // GET A LIST OF NPC's FROM THE SERVER AS JSON DATA
    $('.npc').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list2",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#main2");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li><div>" + "<img src='"+ data[i].imagePath + "'>" + "<p>" + data[i].description + "</p>" + "</div></li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
});