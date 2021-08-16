const { Socket } = require("dgram")
var ws = require("nodejs-websocket")

var server = ws.createServer(socket => {
  socket.on("register", (data) => {

  })
})