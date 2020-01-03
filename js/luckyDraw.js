function testTime() {
	var Array = []; //首先创建一个空数组，用来放随机数
	var mini = document.getElementById("input1").value; //字符串类型的两兄弟
	var maxi = document.getElementById("input2").value;
	var min = parseInt(mini); //因为用getElementById取得的是字符串类型
	var max = parseInt(maxi); //所以需要parseInt转换成number类型

	function getRandom(num1, num2) { //定义一个函数，这个函数是写num1~num2的随机数，现在把他封装成一个函数
		var transition = num2 - num1 + 1; //这里面的加1是为了能够取到num2
		var res = Math.floor(Math.random() * transition + num1);
		return res;
	} //上面的代码已经获取了num1~num2的随机数

	if (mini.length == 0 || maxi.length == 0 || min == max || min > max) { //判断min和max是否相等或min是否大于max
		document.getElementById("one").innerHTML = "<h3>" + "请输入正确的范围" + "</h3>";
		document.getElementsByTagName("h3")[0].style.fontSize = "140px";
		clearInterval(timer);
	} else {
		Array.push(getRandom(min, max)); //把getRandom()函数传给数组
		// 在div中显示一个h3标签，里面装着随机数的数组
		document.getElementById("one").innerHTML = "<h3>" + Array[0] + "</h3>";
		document.getElementsByTagName("h3")[0].style.fontSize = "140px";
	}
}

function setTime(mark) { //这个参数mark相当于是一个标记吧
	timer = null;
	timer = setInterval(testTime, 60); //每60毫秒调用一次testTime()函数
	if (mark == 'stop') {      
		clearInterval(timer); //停止，clearInterval()方法的参数必须是由setInterval()返回的ID值。
	}
	return timer;
}

function clearTime(timer) {}