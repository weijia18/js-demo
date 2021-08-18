var ws = require("nodejs-websocket")
var playerDirector = require("./playerDirector")
var playerFactory = require("./playerFactory")
var roomDirector = require("./roomDirector")

let conns = {}
//
const broadcast = (obj) => {
  if (obj.roomName && conns[obj.roomName].length > 0) {
    conns[obj.roomName].forEach(connect => {
      connect.sendText(JSON.stringify(obj))
    })
  }
  server.connections.forEach(connect => {
    connect.sendText(JSON.stringify(obj))
  })
}

var server = ws.createServer(socket => {
  socket.on("text", (str) => {
    let data = JSON.parse(str)
    switch (data.type) {
      case "register":
        let player = playerFactory(data.message, "civilian")
        //将玩家加入适合的房间
        let room = roomDirector.initRoom(player)
        let { roomName } = room
        conns[roomName] = conns[roomName] || []
        conns[roomName].push(socket)
        broadcast({
          type: "register",
          roomName,
          message: player._name + "加入了房间" + roomName
        })
    }
  })
})