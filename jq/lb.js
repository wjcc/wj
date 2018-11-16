/**
 * Created by cui on 2018/7/30.
 */
$(function(){
    $("header").load("header.html");
    $("footer").load("footer.html")
});
var centBox = document.getElementById('articleList');
var listMore = document.getElementById('listMore');
ajax("jq/listData.json",function(date){
    console.log("成功");
    var _date = eval("("+date+")");
    var list = _date[0].data.list;
    var list2 = _date[2].data.list;
    var str ="";
    var str2 = "" ;
    var count = 0 ;
    for (var i = 0; i < list.length; i++) {
        var {creatAt,describe,title,sysId,coverImg,status} = list[i];
        str += `  <div class="content_one" articleid=${sysId}>
                <div class="img_wrap"><img src="${coverImg}"></div>
                <div class="content_text">
                    <div class="title_small">${title}</div>
                    <div class="date">${creatAt}</div>
                    <p>${describe}</p>
                </div>
                <img class="list_img_over_xiaojiantou" src="images/list_img_over_xiaojiantou.png">
            </div>`;
    }
    $("#articleList").append(str);
    listMore.onclick = function(){
        count++;
        if(count>2){
            $("#imgList").attr("src","images/list_gomore_bg_nomore.jpg");
            $(this).css("opacity" , '0');
        }else {
            $("#articleList").append(str);
        }

        }
},function(){
    console.log("失败");
});
$(".content_one").live("click",function(){
    var num = $(this).attr("articleid");
    window.location.href= "duiy.html?articleId="+num
});

