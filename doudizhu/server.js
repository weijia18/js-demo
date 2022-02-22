var ws = require("nodejs-websocket")
var playerDirector = require("./playerDirector")
var playerFactory = require("./playerFactory")
var roomDirector = require("./roomDirector")

let conns = {}
const askStatusMap = ["不叫", "叫地主", "不抢", "抢地主"]
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
        {
          let player = playerFactory(data.message, "civilian")
          //将玩家加入适合的房间
          let room = roomDirector.initRoom(player)
          let { roomName, playerDirector } = room
          conns[roomName] = conns[roomName] || []
          conns[roomName].push(socket)
          broadcast({
            type: "register",
            roomName,
            message: { roomName, message: player._name + "加入了房间" + roomName }
          })
          if (room.isFull) {
            //初始化客户端房间roomName的玩家们
            broadcast({
              type: "initPlayers",
              roomName,
              message: playerDirector.getPlayers
            })
          }
          break
        }
      case "command":
        {
          let { askstatus, flag, roomName, playerName } = data.message
          let room = roomDirector.getRoom(roomName)
          let { playerDirector } = room
          playerDirector.flag += flag
          broadcast({
            type: "command",
            roomName,
            message: {
              roomName,
              playerName,
              text: askStatusMap[askstatus]
            }
          })
          break
        }
      case "initLandlord":
        {
          let { flag, roomName } = data.message
          let room = roomDirector.getRoom(roomName)
          room.playerDirector.initLandlord()
          //初始化客户端房间roomName的玩家们
          broadcast({
            type: "initLandlord",
            roomName,
            message: playerDirector.getPlayers
          })
          break
        }
      case "":
        break
    }
  })

  socket.on("close", () => {
    console.log("close")
  })

  socket.on("error", (err) => {
    console.log(err)
  })
}).listen(3000, () => {
  console.log("running")
})