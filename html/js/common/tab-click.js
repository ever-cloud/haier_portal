//海尔用户总览tab切换
$(function () {
    //获取文字
    $(".tabMonth").click(function () {
        $(this).addClass("run").siblings().removeClass("run");
        $("#ecHouse").siblings().css("top", "300px");
        $("#ecHouse").css("top", 0);

    });

    //获取文字标签
    $(".tabDay").click(function () {
        $(this).addClass("run").siblings().removeClass("run");
        $("#ecHome").siblings().css("top", "300px");
        $("#ecHome").css("top", 0);

    });

});

//haier社区用户总览切换
$(function () {
    //获取文字
    $(".tabMonth_com").click(function () {
        $(this).addClass("run_com").siblings().removeClass("run_com");
        $("#ecHouse_com").siblings().css("top", "300px");
        $("#ecHouse_com").css("top", 0);

    });


    //获取文字标签
    $(".tabDay_com").click(function () {
        $(this).addClass("run_com").siblings().removeClass("run_com");
        $("#ecHome_com").siblings().css("top", "300px");
        $("#ecHome_com").css("top", 0);

    });
});



//社区用户总览切换
$(function () {
    //获取文字
    $(".tabMonth_new").click(function () {
        $(this).addClass("run_new").siblings().removeClass("run_new");
        $("#ecHousenew").siblings().css("top", "300px");
        $("#ecHousenew").css("top", 0);

    });


    //获取文字标签
    $(".tabDay_new").click(function () {
        $(this).addClass("run_new").siblings().removeClass("run_new");
        $("#ecHomenew").siblings().css("top", "300px");
        $("#ecHomenew").css("top", 0);

    });
});



//海尔集团商业情况
$(function () {
    $(".month").click(function () {
        $(this).addClass("change").siblings().removeClass("change");
        //让兄弟隐藏
        $("#ecMonth").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#ecMonth").css({"top":0,"background-color":"#ffffff"});
    });

    $(".week").click(function () {
        $(this).addClass("change").siblings().removeClass("change");
        //让兄弟隐藏
        $("#ectWeek").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#ectWeek").css({"top":0,"background-color":"#ffffff"});
    });
    $(".day").click(function () {
        $(this).addClass("change").siblings().removeClass("change");
        //让兄弟隐藏
        $("#ecDay").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#ecDay").css({"top":0,"background-color":"#ffffff"});

    });


});


//海尔社区
$(function () {
    $(".com_month").click(function () {
        $(this).addClass("com_change").siblings().removeClass("com_change");
        //让兄弟隐藏
        $("#chartMonth").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartMonth").css({"top":0,"background-color":"#ffffff"});
    });

    $(".com_week").click(function () {
        $(this).addClass("com_change").siblings().removeClass("com_change");
        //让兄弟隐藏
        $("#chartWeek").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartWeek").css({"top":0,"background-color":"#ffffff"});
    });
    $(".com_day").click(function () {
        $(this).addClass("com_change").siblings().removeClass("com_change");
        //让兄弟隐藏
        $("#chartDay").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartDay").css({"top":0,"background-color":"#ffffff"});

    });


});
//社区
$(function () {
    $(".month").click(function () {
        $(this).addClass("change").siblings().removeClass("change");
        //让兄弟隐藏
        $("#chartMonth").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartMonth").css({"top":0,"background-color":"#ffffff"});
    });

    $(".week").click(function () {
        $(this).addClass("com_change").siblings().removeClass("com_change");
        //让兄弟隐藏
        $("#chartWeek").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartWeek").css({"top":0,"background-color":"#ffffff"});
    });
    $(".day").click(function () {
        $(this).addClass("com_change").siblings().removeClass("com_change");
        //让兄弟隐藏
        $("#chartDay").siblings().css({"top":"330px","background-color":"#ffffff"});
        //让当前显示
        $("#chartDay").css({"top":0,"background-color":"#ffffff"});

    });


});


$(function(){
    /**
     * 海尔集团-轮播图两端小箭头鼠标移入移除事件
     */
    $(".hr_blocUser").hover(function () {
        $(".swiper-button-next").css("display", "block");
        $(".swiper-button-prev").css("display", "block");
    }, function () {
        $(".swiper-button-next").css("display", "none");
        $(".swiper-button-prev").css("display", "none");
    });

    /**
     * 海尔社区-轮播图两端小箭头鼠标移入移除事件
     */

    $(".hr_communityUser").hover(function () {
        $(".swiper-button-next").css("display", "block");
        $(".swiper-button-prev").css("display", "block");
    }, function () {
        $(".swiper-button-next").css("display", "none");
        $(".swiper-button-prev").css("display", "none");
    });


    $(".communityUser").hover(function () {
        $(".swiper-button-next").css("display", "block");
        $(".swiper-button-prev").css("display", "block");
    }, function () {
        $(".swiper-button-next").css("display", "none");
        $(".swiper-button-prev").css("display", "none");
    });


})














