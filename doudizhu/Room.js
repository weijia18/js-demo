const { default: playerFactory } = require("./playerFactory")

class Room {
  constructor(name) {
    this.name = name
    this.playerDirector = null
    this.isFull = false//是否满员
  }

  addPlayerDirector(playerDirector) {
    this.playerDirector = playerDirector
  }
}

module.exports = Room