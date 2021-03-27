function getnewslist0103(page,size) {
    $.ajax({
        type: "GET",
        url: "AjaxPage",
        data: { type: "getnewslist", page: page, size: size, sub: $("#sub").val(), name: "column_0103" },
        dataType: "json",
        fail: function (msg) {
            alert(msg);
        },
        success: function (list) {
            if (list == null || list == "" || list.length == 0) {
                $("#list_column_0103").html("<div class=\"card\">没有找到相关信息。</div>");
                return false;
            }
            var html = "";
            $.each(list, function () {
                html += "<div class=\"timeline-item\"><a class=\"J-url\" href=\"Show?sub=" + $("#sub").val() + "&cname=column_0103&tname=" + this.TableName + "&id=" + this.ID + "\">";
                html += "<div class=\"bot-background f-fc0\">";
                html += "<span class=\"bot-cor\"></span><span class=\"item-timestamp\">" + this.TimeStr + "</span><span class=\"item-author\"></span>";
                html += "<div class=\"item-description f-fs16\">" + this.Title + "</div>";
                html += "</div></a><div class=\"bot-d\"><span class=\"iconfont\">&#xe738;</span></div></div>";
            });
            $("#list_column_0103").append(html);
        }
    });
}

function getnewslist(divname, classname, page, size) {

    $.ajax({
        type: "GET",
        url: "AjaxPage",
        data: { type: "getnewslist", page: page, size: size, sub: $("#sub").val(), name: classname },
        dataType: "json",
        fail: function (msg) {
            alert(msg);
        },
        success: function (list) {
            if (list == null || list == "" || list.length == 0) {
                if (page == 1) {
                    $("#" + divname).html("<div class=\"card\">没有找到相关信息。</div>");
                }
                if ($("#" + divname.replace("list", "more"))) {
                    $("#" + divname.replace("list", "more")).css("display", "none");
                }
                return false;
            }

            var html = "";
            $.each(list, function () {
                html += "<div class=\"card\">";
                if (this.ImgPath != "") {
                    html += "<div class=\"card-img f-fr\"><a class=\"J-url\" href=\"Show?sub=" + $("#sub").val() + "&cname=" + classname + "&tname=" + this.TableName + "&id=" + this.ID + "\"><img src=\"" + $("#imgpath").val() + this.ImgPath + "\" alt=\"" + this.Title + "\"></a></div>";
                }
                html += "<div class=\"card-details\">";
                html += "<div class=\"card-title f-fs16\">";
                if (this.Video == "1")
                    html += "<i class=\"iconfont f-fc1\">&#xe701;</i>";
                html += "<a class=\"J-url\" href=\"Show?sub=" + $("#sub").val() + "&cname=" + classname + "&tname=" + this.TableName + "&id=" + this.ID + "\">" + this.Title + "</a></div>";
                html += "<div class=\"card-item f-fc0\"><span class=\"laiy\">" + this.WebSiteName + "</span>" + this.TimeStr + "</div>";
                html += " </div></div>";
            });
            if (page == 1)
                $("#" + divname).html(html);
            else
                $("#" + divname).append(html);
            if ($("#" + divname.replace("list", "more"))) {
                if (list.length < size)
                    $("#" + divname.replace("list", "more")).css("display", "none");
                else
                    $("#" + divname.replace("list", "more")).css("display", "");
            }
        }
    });
}

function getsearchlist(divname,keyword,page, size) {
    $.ajax({
        type: "GET",
        url: "AjaxPage",
        data: { type: "getsearchlist", page: page, size: size, sub: $("#sub").val(), keyword: keyword },
        dataType: "json",
        fail: function (msg) {
            alert(msg);
        },
        success: function (list) {
            if (list == null || list == "" || list.length == 0) {
                if (page == 1) {
                    $("#" + divname).html("<div class=\"card\">没有找到相关信息。</div>");
                }
                return false;
            }

            var html = "";
            $.each(list, function () {
                html += "<div class=\"card\">";
                if (this.ImgPath != "") {
                    html += "<div class=\"card-img f-fr\"><a class=\"J-url\" href=\"Show?sub=" + $("#sub").val() + "&tname=" + this.TableName + "&id=" + this.ID + "\"><img src=\"" + $("#imgpath").val() + this.ImgPath + "\" alt=\"" + this.Title + "\"></a></div>";
                }
                html += "<div class=\"card-details\">";
                html += "<div class=\"card-title f-fs16\">";
                if (this.Video == "1")
                    html += "<i class=\"iconfont f-fc1\">&#xe701;</i>";
                html += "<a class=\"J-url\" href=\"Show?sub=" + $("#sub").val() + "&tname=" + this.TableName + "&id=" + this.ID + "\">" + this.Title.replace(keyword, "<em>" + keyword + "</em>") + "</a></div>";
                html += "<div class=\"card-item f-fc0\"><span class=\"laiy\">" + this.WebSiteName.replace(keyword, "<em>" + keyword + "</em>") + "</span>" + this.TimeStr + "</div>";
                html += " </div></div>";
            });
            if (page == 1)
                $("#" + divname).html(html);
            else
                $("#" + divname).append(html);
        }
    });
}

function goback() {
    if (document.referrer)
        window.history.go(-1);
    else
        window.location.href = "Index?sub=" + $("#sub").val();
}
