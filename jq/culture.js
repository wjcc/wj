/**
 * Created by Administrator on 2018/1/27 0027.
 */
$(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");

    (function(){
        $(window).scroll(function(){
            $(window).scrollTop();//获取当前窗口距离
            //页面距离顶部距离
            if($(window).scrollTop()>500){
                //判断窗口距离页面顶部的距离是否超过500
                $(".fixed_tip").show()
            }else {
                $(".fixed_tip").hide(0);
            }
        });
        $(".fixed1").click(function(){
            $("body,html").animate({scrollTop:0},600);
            //html和body的scrollTop值为零，就可以让页面返回到顶部
            $(".fixed_tip").animate({bottom:3000},600,function(){
                $(".fixed_tip").css({bottom:160})
            })
        });
    })();


    $(".title_list .pen").click(function(){
        $(".title_list").animate({width:210},500)
            .animate({width:780},1000)
    });

});