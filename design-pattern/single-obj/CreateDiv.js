var jsdom = require("jsdom")
var JSDOM = jsdom.JSDOM
var document = new JSDOM().window.document

var CreateDiv = function(html){
  this.html = html
  this.init()
}

CreateDiv.prototype.init = function(){
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}


//引入代理类
var ProxySingletonCreateDiv = (function(){
  var instance
  
  return function(html){
    if(!instance){
      instance =  new CreateDiv(html)
    }
    return instance
  }
})()


var a = new ProxySingletonCreateDiv('aa')
var b = new ProxySingletonCreateDiv('bb')

console.log(a === b)