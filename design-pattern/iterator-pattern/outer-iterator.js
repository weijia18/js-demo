var iterator = function(obj){
  var current = 0 

  var next = function(){
    current += 1
  }

  var isDone = function(){
    return current >= obj.length 
  }

  var getCurrItem = function(){
    return obj[current]
  }

  return{
    next,
    isDone,
    getCurrItem
  }
}