$(function () {
    $(".my-content img").css("max-width", "100%");
    $(".my-content img").css("height", "auto");
    //$("my-content img").parents("p").css("text-indent","0em");
    var listname = "list";
    var classname = $("#cname").val();
    if (classname != "")
        getnewslist(listname, classname, 1, 3);
    else {
        $("#title").css("display", "none");
        $("#list").css("display", "none");
    }
});