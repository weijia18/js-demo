var playerDirector = require("./playerDirector")
var Room = require("./Room")

var roomDirector = (function () {
  var _initRoomNO = function () {
    let list = []
    for (let i = 0; i < 10; i++) {
      list.push(i)
    }
    return list
  }

  var _roomNO = {
    bronze: _initRoomNO(),
    sliver: _initRoomNO(),
    gold: _initRoomNO(),
    diamond: _initRoomNO(),
  }

  var _rooms = {}

  var _initRoom = function (player) {
    let { level } = player
    let roomKeys = _rooms.keys()
    let key = level + '_' + _roomNO[level][0]
    if (roomKeys.include(key)) {
      if (_rooms[key].playerDirector.playerNums === 3) {
        let newKey = level + '_' + _roomNO[level].pop()
        let playerDirectorCopy = playerDirector()
        let room = new Room(newKey)
        room.addPlayerDirector(playerDirectorCopy)
        _rooms[newKey] = room
        return room
      } else {
        _rooms[key].playerDirector.playerNums++
        if (_rooms[key].playerDirector.playerNums === 3) {
          _rooms[key].playerDirector.init()
          _rooms[key].isFull = true
        }
        return _rooms[key]
      }
    } else {
      let newKey = level + '_' + _roomNO[level].pop()
      let playerDirectorCopy = playerDirector()
      let room = new Room(newKey)
      room.addPlayerDirector(playerDirectorCopy)
      _rooms[newKey] = room
      return room
    }
  }

  var _getRoom = function (key) {
    return _rooms[key]
  }

  var _removeRoom = function (key) {
    let level = key.split('_')[0]
    let number = key.split('_')[0]
    delete _rooms[key]
    //房间回收
    _roomNO[level].push(number)
  }

  return {
    initRoom: _initRoom,
    getRoom: _getRoom,
    removeRoom: _removeRoom
  }
}())

module.exports = roomDirector