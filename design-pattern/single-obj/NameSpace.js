//动态创建命名空间
var app = {}

app.namespace = function(name){
  let parts = name.split('.')
  let cur = app
  for(var i in parts){
    if(!cur[parts[i]]){
      cur[parts[i]] = {}
    }
    cur = cur[parts[i]]
  }
  return app
}

app.namespace('aa.aaa')
console.log(app)