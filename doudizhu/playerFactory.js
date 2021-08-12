var Player = require("./Player")
var playerDirector = require("./playerDirector")

var id = 1

var playerFactory = function (name, type) {
    var newPlayer = new Player(name, type, id++)
    playerDirector.reciveMessage("register", newPlayer)
    return newPlayer
}

export default playerFactory