var pokerCardFactory = require("./pokerCardFactory")
var playerFactory = require('./playerFactory')

var random = require('./random')


var proxy = (function(){
  var players = {}
  var operations = {}
  var _cards = pokerCardFactory()
  
  operations.register = function (player) {
    let type = player._type
    players[type] = player[type] || []
    players[type].push(player)
  }
  
  //发牌
  operations.deal = function () {
    let card = []
    //cards深拷贝_cards
    for(let i = 0; i < _cards.length; i++){
        card.push(card[i])
    }
    while(cards.length > _playerList.length){
        _playerList.forEach(play => { 
            player._pokerCardList.push(cards.shift())
        })
    }
    //返回剩余的牌，地主的牌
    return cards
  }

  //用Knuth-Durstenfeld Shuffle算法洗牌
  var shuffle = function () {
    let len = _cards.length

    for(let i = n -1; i > 0 ; i--){
        let index = random(0, i)
        //随机位置和当前位置相同则不需交换
        if(index === i){
            continue
        }
        let tmp = _cards[i]
        _cards[i] = _cards[index]
        _cards[index] = tmp
    }
    return _cards
  }

  var reciveMessage = function(){
      var message = Array.prototype.shift.apply(arguments)

  }
})