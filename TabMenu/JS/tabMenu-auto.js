window.onload=tabMenuAuto;

function tabMenuAuto(){
	//获取菜单的选项卡部分
	var tabMenuHead=document.getElementsByClassName('tabMenu-hd')[0],
		//获取所有单个选项卡
		headLis=tabMenuHead.getElementsByTagName('li'),
		//获取菜单的内容部分
		tabMenuBody=document.getElementsByClassName('tabMenu-bd')[0],
		//获取所有单个内容
		mods=tabMenuBody.getElementsByClassName('mod'),
		//准备一个变量给定时器
		timer = null,
		//设置索引
		index=0;
		//设置定时器
		timer=setInterval(autoPlay,2000);
		//遍历每一个选项卡设置事件
		for (var i = 0; i < headLis.length; i++) {
			//给每个选项卡一个索引值
			headLis[i].id=i;
			//给每个选项卡加上onmouseover事件
			headLis[i].onmouseover=function(){
				//鼠标移入，取消定时器
				clearInterval(timer);
				changeTab(this.id);
			}
			//给每个选项卡加上onmouseout事件
			headLis[i].onmouseout=function(){
				//鼠标离开继续启动定时器
				timer=setInterval(autoPlay,2000);
			}
		}
	//索引值为curIndex的选项卡改变状态
	function changeTab(curIndex){
		for (var j = 0; j < headLis.length; j++) {
			headLis[j].className="";
			mods[j].style.display="none";
		}
		headLis[curIndex].className="select";
		mods[curIndex].style.display="block";
		//将索引值传给index，让计时器从当前索引继续
		index=curIndex;
	}
	//设置计时器内的函数
	function autoPlay(){
		//每次执行索引+1，让选项卡按顺序改变状态
		index++;
		//当索引值超过选项卡最后一位的索引值，归零
		if (index>=headLis.length) {
			index=0;
		}
		//当前索引改变状态
		changeTab(index);
	}
}