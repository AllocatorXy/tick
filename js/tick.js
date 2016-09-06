function toDouble(n) {
	if (n<10) 
	{
		return '0'+n;
	}
	else
	{
		return ''+n; 
	}
}

window.onload = function () {
	var aImg = document.getElementsByClassName('t');
	function tick() 
	{
	var oDate = new Date();
	var str = toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());

		for (var i = 0; i < aImg.length; i++) 
		{
		aImg[i].src='images/'+str.charAt(i)+'.jpg'; //str[i]这种写法不兼容低版本浏览器
		}
	}
	tick(); //一开始先运行一遍，避免刷新时一秒延迟回归初始值
	setInterval(tick, 1000);
};

