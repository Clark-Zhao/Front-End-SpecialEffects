window.onload=tabMenuOnmouseover;

function tabMenuOnmouseover(){
	//获取菜单的选项卡部分
	var tabMenuHead=document.getElementsByClassName('tabMenu-hd')[0],
		//获取所有单个选项卡
		headLis=tabMenuHead.getElementsByTagName('li'),
		//获取菜单的内容部分
		tabMenuBody=document.getElementsByClassName('tabMenu-bd')[0],
		//获取所有单个内容
		mods=tabMenuBody.getElementsByClassName('mod');
	//遍历选项卡
	for (var i = 0; i < headLis.length; i++) {
		//给每个选项卡一个索引值
		headLis[i].index = i;
		//给每个选项卡加上onmouseover事件
		headLis[i].onmouseover=function(){
			//当鼠标划过的时候再次遍历，先把所有的选项卡变为普通状态，所有的内容变为隐藏状态
			for (var j = 0; j < headLis.length; j++) {
				headLis[j].className="";
				mods[j].style.display="none";
			}
			//在给鼠标所划过的当前选项卡加上选中状态，并让其对应的内容显示
			this.className="select";
			mods[this.index].style.display="block";
		}
	}
}