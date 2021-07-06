function throttle(fn, delay){
  var preTime = Date.now()

  return function(){
    var context = this
    var args = arguments

    var nowTime = Date.now()

    if(nowTime - preTime >= delay){
      preTime = Date.now()
      return fn.apply(context, args)
    }
  }
}