var outerFunc = function(fn){
  var name = 'Nancy'
  return function(){
    //console.log(this)//在浏览器环境下返回window对象
    return fn.apply(this, arguments)
  }
}

var name = 'Tom'

Object.prototype.name = "Harry"

var obj = {
  name: 'Jack',
  test: function(){
    return this.name
  }
}

var func = outerFunc(obj.test)

console.log(obj.test())
console.log(func())//浏览器环境下返回Tom,node环境下返回Harry