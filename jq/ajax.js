/**
 * Created by Administrator on 2018/10/10.
 */
function ajax(url,fnSucc,fnFaild){
//    1.创建ajax实例
    try{
        var xml = new XMLHttpRequest();
    }catch (e){
        xml = new ActiveXObject('Microsoft.XMLHTTP');
    }
//    2.打开与服务器的连接
    xml.open('GET',url,true);
//    3.发送
    xml.send();
//    4. 等待服务器作出响应
    xml.onreadystatechange = function(){
        if(xml.readyState==4){
            if(xml.status==200){
                //alert('true');
                fnSucc(xml.responseText);
            }else {
                //alert('false');
                if(fnFaild){
                    fnFaild();
                }
            }
        }
    }
}