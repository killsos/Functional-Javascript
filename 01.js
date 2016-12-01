function splat(fun) {
	return function (array) {
		return fun.apply(null,array)
	}
}

/**
* 函数编程初始 一个返回函数的函数
*
*/

