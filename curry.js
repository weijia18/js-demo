Function.prototype.method = function(name, func){
  this.prototype.name = func
  return this
}

Function.method('curry', function(){
  let slice = Array.prototype.slice
      args = slice.apply(arguments)
      that = this
  return function (){
    return that.apply(null, args.concat(slice.apply(arguments)))
  }
})


//参考JavaScript语言精粹