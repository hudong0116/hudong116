var page = 1;
var size = 20;
var listname = "list";
var classname = "";
$(function () {
    var classname = $("#datacid").val();
    getnewslist(listname, classname, page, size);
    $(window).scroll(function () { 
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight > scrollHeight - 20) {
                page++;
                getnewslist(listname, classname, page, size);
            }
    });
}
);