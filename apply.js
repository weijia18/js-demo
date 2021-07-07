Function.prototype.apply = function(obj){
  var obj = obj || window
  obj.fn = this
  var result

  if(!arr){
    result = obj.fn()
  }else{
    if(!Array.isArray(arr)){
      throw new Error('第二个参数必须为数组')
    }
    var args = []
    for(let i = 0; i < arr.length; i++){
      args.push(`arr[${i}]`)
    }

    result = eval(`obj.fn(${args})`)
  }

  delete obj.fn
  return result
}


//参考文章：https://blog.csdn.net/ws9029/article/details/96882380