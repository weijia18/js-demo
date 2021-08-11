var pokerCardFactory = require("./pokerCardFactory")

var proxy = (function(){
  var _playerList = []
  var _cards = pokerCardFactory()
  
  var register = function (player) {
    _playerList.push(player)
  }
  
  //发牌
  var deal = function () {
    
  }

  //洗牌
  var shuffle = function () {
    
  }

  var win = function () {
    
  }
})