var Player = require("./Player")
var playerDirector = require("./playerDirector")
var random = require('./random')

var id = 1
const levels = ["bronze", "sliver", "gold", "diamond"]

var playerFactory = function (name, type) {
    let levelIndex = random(0, 3)
    let level = levels[levelIndex]
    var newPlayer = new Player(name, type, id++, level)
    playerDirector.reciveMessage("register", newPlayer)
    return newPlayer
}

export default playerFactory