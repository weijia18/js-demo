var ws = require("nodejs-websocket")
var playerDirector = require("./playerDirector")
var playerFactory = require("./playerFactory")

var playNums = 0

var server = ws.createServer(socket => {
  socket.on("register", (data) => {
    playerFactory("Player" + (++playNums), "civilian")
  })
})