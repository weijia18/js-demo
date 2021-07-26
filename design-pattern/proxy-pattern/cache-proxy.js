//创建缓存代理工厂
var createProxyFactory = function(fn){
  var cache = {}
  return function(){
    var args = Array.prototype.join.call(arguments, ',')
    if(args in cache){
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

var mult = function(){
  var a = 1
  for(var i = 0, l = arguments.length; i < l; i++){
    a = a*arguments[i]
  }
  return a
}

var proxyMult = createProxyFactory(mult)