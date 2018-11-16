
var GLOBAL = GLOBAL || {};
$(function(){
	loadArticleDetail();

});

//加载列表数据方法
function loadArticleDetail(){
	if(getUrlParams("articleId")){
		var pages=getUrlParams("articleId");
		var results=articleData["xiaoniaoNews"+pages];
		$("#typeTitle").html(results.data.typeTitle);
		$("#typeEntitle").html(results.data.typeEntitle);
		$('#articleTitle').text(results.data.title);
		$('#updateTime').text(results.data.updateAt);
		$('#cover').attr("src",results.data.coverImg);
		$('#author').text(results.data.creatByFullName);
		$('#content').html(results.data.content);
	}
}
//获取页面url传过来的参数
function getUrlParams(name){
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if(r!=null){
		 return  r[2];
	 }else {
		 return "";
	 }
}

