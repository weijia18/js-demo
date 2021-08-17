var roomDirector = (function () {
  var _roomNO = {
    bronze: _initRoomNO(),
    sliver: _initRoomNO(),
    gold: _initRoomNO(),
    diamond: _initRoomNO(),
  }

  var _rooms = {}

  var _initRoomNO = function () {
    let list = []
    for (let i = 0; i < 10; i++) {
      list.push(i)
    }
    return list
  },

  var _createRoom = function (data) {
    let { level } = data
    let roomKeys = _rooms.keys()
    let key = level + _roomNO[level][0]
    if (roomKeys.include(key)) {
      if (_rooms[key].playerNums === 3) {
        let newKey = level + _roomNO[level].pop()
        _rooms[newKey] = {
          name: newKey,
          playerNums: 1
        }
      } else {
        _rooms[key].playerNums++
      }
    } else {
      let newKey = level + _roomNO[level].pop()
      _rooms[newKey] = {
        name: newKey,
        playerNums: 1
      }
    }
  }
}())