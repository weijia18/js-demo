Function.prototype.bind = function(obj){
  var self = this

  var args = Array.prototype.slice.call(arguments, 1)

  var newFunc = function(){
    self.apply(obj, Array.prototype.concat.call(args,Array.prototype.slice.call(arguments)))
  }

  return newFunc
}