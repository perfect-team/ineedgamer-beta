$(function () {
    $(".games").css({
        "backgroundColor": "#121212",
        "width": "100%",
        "max-width": "100%",
        "height":"auto"
    });

    $('#onlineUsersPanel').toast('dispose');
    $('#messagePanel').toast('show');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 10) {
        $(".games-navbar").removeClass("bg-transparent");
        $(".games-navbar").css("background-color", "transparent");
    } else {
        $(".games-navbar").css({ "background-color": "#121212" , "opacity":"0.9"});
    }
    prevScrollpos = currentScrollPos;
};   



$("#onlineFriendButton").click(function () {
    $(this).hide();
    $('#onlineUsersPanel').toast('show');
});

$(".closeUsersPanel").click(function () {
    $("#onlineFriendButton").show();
});

$(".user").click(function () {
    alert();
});
