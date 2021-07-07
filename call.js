Function.prototype.call = function (obj){
  var obj = obj || window;
  obj.fn = this

  var args = []
  var len = arguments.length

  for(var i = 1; i < len; i++){
    args.push(`arguments[${i}]`)
  }

  var result = eval(`obj.fn(${args})`)

  delete obj.fn

  return result
}

// var name = '李四'
// var b = {name:'张三'};
// function a(n){
//     console.log(this.name+n+'岁了')
// }
// a.call(b,'18');//'张三18岁了'
// a.call(null,'18');//'李四18岁了'


//参考文章：https://blog.csdn.net/ws9029/article/details/96882380