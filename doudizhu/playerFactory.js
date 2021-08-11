var Player = require("./Player")
var playerDirector = require("./playerDirector")

var playerFactory = function(name, type){
    var newPlayer = new Player(name, type)
    playerDirector.reciveMessage("register", newPlayer)
    return newPlayer
}

export default playerFactory