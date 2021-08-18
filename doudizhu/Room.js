const { default: playerFactory } = require("./playerFactory")

class Room {
  constructor(name) {
    this.name = name
    this.playerDirector = null
  }

  addPlayerDirector(playerDirector) {
    this.playerDirector = playerDirector
  }
}

export default Room