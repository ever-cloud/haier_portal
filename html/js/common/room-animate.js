$(function () {
    $("#nav_room .box li").on("dblclick", function () {
        setCookie("showImage",$(this).text())
         window.parent.frames["main"].location.reload();
    })


})