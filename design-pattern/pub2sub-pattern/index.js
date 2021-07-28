//发布者
var _event = {
  clientObj:[],
  listen:function(key, fn){
    if(!this.clientList[key]){
      this.clientObj[key].push(fn)
    }
  },

  trigger: function(){
    let key = Array.prototype.shift.call(arguments)
        fns = this.clientObj[key]
    
    if(!fns || fns.length === 0){
      return false
    }

    for(let i = 0, fn; fn = fns[i++];){
      fn.apply(this, arguments)
    }
  },

  remove: function(key, fn){
    let fns = this.clientObj[key]

    if(!fns){
      return false
    }

    if(!fn){
      fns && (fns.length = 0)
    }else{
      for(let l = fns.length; l >= 0; l--){
        let _fn = fns[l]
        if(_fn === fn){
          fns.splice(l, 1)
        }
      }
    }
  }
}

var installEvent = function(obj){
  for(let i in _event){
    obj[i] = _event[i]
  }
}