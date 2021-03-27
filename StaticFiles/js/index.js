var page = 1;
var page0102 = 1;
var size = 6;
var listname = "";
var classname = "";
$(function () {
    listname = "list_column_0103";
    classname = "column_0103";

    getnewslist("list_column_0102", "column_0102", 1, size);//每日要闻
    getnewslist0103(1, size);//疫情追踪

    $(".btn-more").click(function () {
            page0102++;
            getnewslist("list_column_0102", "column_0102", page0102, size);
    });

    $(window).scroll(function () {
        if (classname == "column_0103") {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight > scrollHeight - 20) {
                page++;
                getnewslist0103(page, size);
                //else
                //    getnewslist(listname, classname, page, size);
            }
        }
    });
    
    //趋势图左
    var date = new Array();
    var confirmedNum = new Array();
    var curesNum = new Array();
    var treatingNum = new Array();
    var deathsNum = new Array();
    var i = 0;
    var myChart2;
    $.ajax({
        url: "AjaxPage",
        data: { type: "getdailydatalist", sub: $("#sub").val(), cname: "dailydata_left" },
        type: "GET",
        dataType: "json", //返回数据格式为json
        fail: function (msg) {//请求成功完成后要执行的方法
            alert(msg);
        },
        success: function (list) {//请求成功完成后要执行的方法
            $.each(list, function (index) {
                date[index] = this.date.substr(5).replace('-', '.');
                confirmedNum[index] = this.confirmedNum;
                curesNum[index] = this.curesNum;
                treatingNum[index] = this.treatingNum;
                deathsNum[index] = this.deathsNum;
            });

            $("#treating1").html(treatingNum[0]);
            $("#confirmed1").html(confirmedNum[0]);
            $("#death1").html(deathsNum[0]);
            $("#cured1").html(curesNum[0]);

            if (treatingNum[0] - treatingNum[1]<0)
                $("#treating1y").html(treatingNum[0] - treatingNum[1]);
            else
                $("#treating1y").html("+" + (treatingNum[0] - treatingNum[1]));
            if (confirmedNum[0] - confirmedNum[1]<0)
                $("#confirmed1y").html(confirmedNum[0] - confirmedNum[1]);
            else
                $("#confirmed1y").html("+" + (confirmedNum[0] - confirmedNum[1]));
            if (deathsNum[0] - deathsNum[1]<0)
                $("#death1y").html(deathsNum[0] - deathsNum[1]);
            else
                $("#death1y").html("+" + (deathsNum[0] - deathsNum[1]));
            if (curesNum[0] - curesNum[1] <0)
                $("#cured1y").html(curesNum[0] - curesNum[1]);
            else
                $("#cured1y").html("+" + (curesNum[0] - curesNum[1]));
            myChart2 = echarts.init(document.getElementById('line1'));
            option = {
                color: ['#AE212C', '#39c4c4', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
                title: {
                    text: '最新疫情趋势图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['累计确诊', '治愈人数'],
                    right: '2%',
                    textStyle: {
                        fontSize:12
                    }

                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date.reverse(),
                    axisLabel: { rotate: 50, interval: Math.floor(date.length / 20), showMaxLabel: true },
                    
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '累计确诊',
                        type: 'line',
                        //stack: '总量',
                        smooth: true,
                        data: confirmedNum.reverse()
                    },
                    {
                        name: '治愈人数',
                        type: 'line',
                        //stack: '总量',
                        smooth: true,
                        data: curesNum.reverse()
                    }
                ]
            };
            myChart2.setOption(option);
        }
    });

    //趋势图右
    var date2 = new Array();
    var confirmedNum2 = new Array();
    var curesNum2 = new Array();
    var treatingNum2 = new Array();
    var deathsNum2 = new Array();
    var myChart4;
    $.ajax({
        url: "AjaxPage",
        data: { type: "getdailydatalist", sub: $("#sub").val(), cname: "dailydata_right" },
        type: "GET",
        dataType: "json", //返回数据格式为json
        fail: function (msg) {//请求成功完成后要执行的方法
            alert(msg);
        },
        success: function (list) {//请求成功完成后要执行的方法
            $.each(list, function (index) {
                date2[index] = this.date.substr(5).replace('-', '.');
                confirmedNum2[index] = this.confirmedNum;
                curesNum2[index] = this.curesNum;
                treatingNum2[index] = this.treatingNum;
                deathsNum2[index] = this.deathsNum;
            });
            $("#treating2").html(treatingNum2[0]);
            $("#confirmed2").html(confirmedNum2[0]);
            $("#death2").html(deathsNum2[0]);
            $("#cured2").html(curesNum2[0]);

            if (treatingNum2[0] - treatingNum2[1] < 0)
                $("#treating2y").html(treatingNum2[0] - treatingNum2[1]);
            else
                $("#treating2y").html("+" + (treatingNum2[0] - treatingNum2[1]));
            if (confirmedNum2[0] - confirmedNum2[1] < 0)
                $("#confirmed2y").html(confirmedNum2[0] - confirmedNum2[1]);
            else
                $("#confirmed2y").html("+" + (confirmedNum2[0] - confirmedNum2[1]));
            if (deathsNum2[0] - deathsNum2[1] < 0)
                $("#death2y").html(deathsNum2[0] - deathsNum2[1]);
            else
                $("#death2y").html("+" + (deathsNum2[0] - deathsNum2[1]));
            if (curesNum2[0] - curesNum2[1] < 0)
                $("#cured2y").html(curesNum2[0] - curesNum2[1]);
            else
                $("#cured2y").html("+" + (curesNum2[0] - curesNum2[1]));
            myChart4 = echarts.init(document.getElementById('line2'));
            option = {
                color: ['#AE212C', '#39c4c4', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
                title: {
                    text: '最新疫情趋势图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['累计确诊', '治愈人数'],
                    right: '2%',
                    textStyle: {
                        fontSize: 12
                    }
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date2.reverse(),
                    axisLabel: { rotate: 50, interval: Math.floor(date2.length / 20), showMaxLabel: true }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '累计确诊',
                        type: 'line',
                        //stack: '总量',
                        smooth: true,
                        data: confirmedNum2.reverse()
                    },
                    {
                        name: '治愈人数',
                        type: 'line',
                        //stack: '总量',
                        smooth: true,
                        data: curesNum2.reverse()
                    }
                ]
            };
            myChart4.setOption(option);
        }
    })

    var listmap1 = new Array();
    var listmap2 = new Array();
    var host = window.location.protocol + "//" + window.location.host;
    //最新数据和地图左
    $("#map1").css("display", "");
    var myChart1 = echarts.init(document.getElementById('map1'));
    myChart1.showLoading();
    $.ajax({
        url: "AjaxPage",
        data: { type: "getmapdatalist", sub: $("#sub").val(), cname: "mapdata_left" },
        type: "GET",
        dataType: "json", //返回数据格式为json
        fail: function (msg) {//请求成功完成后要执行的方法
            alert(msg);
        },
        success: function (list) {//请求成功完成后要执行的方法
            var countyhtml = "";
            if (list== null || list.length <= 1)
                $("#map1").css("display", "none");
            $.each(list, function () {
                countyhtml += "<div class=\"table-item\"><p class=\"p1\">" + this.name + "</p><p class=\"p2\">" + this.confirmed_count + "</p><p class=\"p4\">" + this.cured_count + "</p></div>";
                listmap1.push({"name": this.name, "value": this.confirmed_count});
            });
            $("#countydata").html(countyhtml);
            //地图左
            $.get(host + '/StaticFiles/js/' + $("#mapname").val(), function (geoJson) {
                myChart1.hideLoading();
                echarts.registerMap('map1', geoJson);
                myChart1.setOption(option = {
                    title: {
                        text: $("#areaname").val()
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (para) {
                            if (para.value) {
                                return para.name + '<br/>累计确诊:' + para.value;
                            } else {
                                return para.name + '<br/>累计确诊:0';
                            }
                        }
                    },
                    itemStyle: {
                        normal: { label: { show: true }},
                        emphasis: { label: { show: true } }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    },
                    visualMap: {
                        pieces: [
                            { min: 1000 },
                            { min: 100, max: 999 },
                            { min: 10, max: 99 },
                            { min: 1, max: 9 }
                        ],
                        color: ['#660208', '#CC2929', '#FF7B69', '#FFAA85'],
                        textStyle: {
                            color: '#000',
                            fontSize: 12
                        },
                        align: 'left',
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            name: $("#areaname").val(),
                            type: 'map',
                            mapType: 'map1', // 自定义扩展图表类型
                            label: {
                                show: true
                            },
                            data: listmap1
                        }
                    ]
                });
            });
        }
    });

    //最新数据和地图右
    var myChart3 = echarts.init(document.getElementById('map2'));
    myChart3.showLoading();

    $.ajax({
        url: "AjaxPage",
        data: { type: "getmapdatalist", sub: $("#sub").val(), cname: "mapdata_right" },
        type: "GET",
        dataType: "json", //返回数据格式为json
        fail: function (msg) {//请求成功完成后要执行的方法
            alert(msg);
        },
        success: function (list) {//请求成功完成后要执行的方法
            var cityhtml = "";
            if (list == null || list.length <= 1)
                $("#map2").css("display", "none");
            $.each(list, function () {
                cityhtml += "<div class=\"table-item\"><p class=\p1\>" + this.name + "</p><p class=\p2 f-fc1\">" + (this.confirmedIncr<0 ? "待公布" : this.confirmedIncr) + "</p><p class=\"p2\">" + this.confirmedNum + "</p><p class=\"p3\">" + this.deathsNum + "</p><p class=\"p4\">" + this.curesNum + "</p></div>";
                listmap2.push({ "name": this.name, "value": this.confirmedNum });
            });
            $("#citydata").html(cityhtml);
            $.get(host + '/StaticFiles/js/' + $("#fathermapname").val(), function (geoJson) {
                myChart3.hideLoading();
                echarts.registerMap('map2', geoJson);
                myChart3.setOption(option = {
                    title: {
                        text: $("#fatherareaname").val()
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (para) {
                            if (para.value) {
                                return para.name + '<br/>累计确诊:' + para.value;
                            } else {
                                return para.name + '<br/>累计确诊:0';
                            }
                        }
                    },
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    },
                    visualMap: {
                        pieces: [
                            { min: 1000 },
                            { min: 100, max: 999 },
                            { min: 10, max: 99 },
                            { min: 1, max: 9 }
                        ],
                        color: ['#660208', '#CC2929', '#FF7B69', '#FFAA85'],
                        textStyle: {
                            color: '#000'
                        },
                        align: 'left',
                        orient: 'horizontal'
                    },

                    series: [
                        {
                            name: $("#fatherareaname").val(),
                            type: 'map',
                            mapType: 'map2', // 自定义扩展图表类型
                            label: {
                                show: true
                            },
                            data: listmap2
                        }
                    ]
                });
            });
        }
    });
    
    $("#tab2").click(function () {
        setInterval(re, 160);
    });
    $("#tab2").mousemove(function () {
        setInterval(re, 160);
    });

    $("#tab1").click(function () {
        setInterval(re, 160);
    });
    $("#tab1").mousemove(function () {
    setInterval(re, 160);
    });

    $(window).resize(function () {
        re();
    });
    function re() {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
    }

});