//创建一个滑动门方法，传入“参数为容器的ID”和“图片在非展示状态时要露出部分的宽度”
var slidingDoors = function(id,showPart){

	//获取滑动门容器
	var slidingDoorsContainer=document.getElementById(id);

	//获取容器下的所有图片
	var imgs=slidingDoorsContainer.getElementsByTagName('img');

	//根据图片的高度和图片数量来确定容器的大小
	slidingDoorsContainer.style.height=imgs[0].offsetHeight+"px";
	slidingDoorsContainer.style.width=imgs[0].offsetWidth+(imgs.length-1)*showPart+"px";

	//初始化各个图片的位置
	function init(){
		for (var i = 1; i < imgs.length; i++) {
			imgs[i].style.left=imgs[0].offsetWidth+showPart*(i-1)+"px";
		}
	}
	init();

	//当鼠标移到图片上时，图片将要向左滑动的距离
	var moveToLeft=imgs[0].offsetWidth-showPart;

	//给每张图片绑定onmouseover事件，产生滑动效果
	for (var i = 0; i < imgs.length; i++) {
		//使用立即执行函数来解决闭包问题
		(function(i){
			imgs[i].onmouseover = function(){
				init();
				for (var j = 1; j <= i; j++) {
					imgs[j].style.left = parseInt(imgs[j].style.left) - moveToLeft+'px';
				}
			}
		}(i));
	}
}

window.onload=function(){
	slidingDoors("slidingDoorsContainer",160);
}