var page = 1;
var size = 20;
var listname = "list";
$(function () {
    var keyword = $("#txtKeyword").val();
    getsearchlist(listname,keyword, page, size);
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight > scrollHeight - 20) {
            page++;
            getsearchlist(listname,keyword, page, size);
        }
    });
}
);