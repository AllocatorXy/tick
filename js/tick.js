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
window.onload = function () 
{

	var aImgTick = document.getElementsByClassName('t');
	var aImgDate = document.getElementsByClassName('dt');
	var aImgDay = document.getElementsByClassName('today');

	function date() 
	{
		var oDate = new Date();
		var str = toDouble(oDate.getFullYear())+toDouble((oDate.getMonth()+1))+toDouble(oDate.getDate());

		for (var i = 0; i < aImgDate.length; i++) 
		{
			aImgDate[i].src='images/'+str.charAt(i)+'.png';
		}
	}

	function weekday() {
		var oDate = new Date();
		var str = oDate.getDay().toString();
		// alert(typeof(str));
		aImgDay[0].src = 'images/weekdays/'+str+'.png';
	}

	function tick() 
	{
	var oDate = new Date();
	var str = toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());

		for (var i = 0; i < aImgTick.length; i++) 
		{
		aImgTick[i].src='images/'+str.charAt(i)+'.png'; //str[i]这种写法不兼容低版本浏览器
		}
	}
	date();
	weekday();
	tick(); //一开始先运行一遍，避免刷新时一秒延迟回归初始值
	setInterval(tick, 1000);
};

