var pokerCardFactory = require("./pokerCardFactory")
var playerFactory = require('./playerFactory')
var selectLandlord = require('./landlordRules')
var random = require('./random')


var playerDirector = function () {
  var _players = {}
  var PLAYER_NUMS = 3
  var _playerNums = 0
  var _flag = ''

  var operations = {}
  var _cards = pokerCardFactory()

  //添加玩家
  operations.register = function (player) {
    let type = player._type
    _playerNums++
    _players[type] = player[type] || []
    _players[type].push(player)
  }

  operations.removePlayer = function (player) {
    let type = player._type
    let teamPlayers = player[type] || []
    for (let i = teamPlayers.length - 1; i >= 0; i--) {
      if (teamPlayers[i] && teamPlayers[i].id === player.id) {
        teamPlayers.splice(i, 1)
      }
    }
  }

  //改变身份
  operations.changeIdentity = function (player, newType) {
    operations.removePlayer(player)
    player._type = newType
    operations.register(player)
  }

  operations.askLandlord = function (player, flag) {
    _flag += flag
    player._isAsk = true
  }

  operations.notAskLanlord = function (player, flag) {
    _flag += flag
    player._isAsk = false
  }

  operations.sobLandlord = function (player, flag) {
    _flag += flag
    player._isSob = true
  }

  operations.notSobLandlord = function (player, flag) {
    _flag += flag
    player._isSob = false
  }

  var reciveMessage = function () {
    var message = Array.prototype.shift.apply(arguments)
    operations[message].apply(this, arguments)
  }

  //寻找庄家的位置
  var _findBankerIndex = function (playerList) {
    playerList.forEach((player, index) => {
      if (player._isBanker) {
        return index
      }
    })
  }

  //获取玩家index循环列表
  var _getCycleIndexList = function (bankerIndex, pLen) {
    let cycleList = []
    cycleList.push(bankerIndex)
    let c = bankerIndex + 1
    while (c % pLen !== bankerIndex) {
      cycleList.push(c % pLen)
      c++
    }
    return cycleList
  }

  //发牌
  var _deal = function () {
    let card = []
    //cards深拷贝_cards
    for (let i = 0; i < _cards.length; i++) {
      card.push(card[i])
    }
    let pLen = _players["civilian"].length
    let bankerIndex = _findBankerIndex(_players["civilian"])
    let cycleList = _getCycleIndexList(bankerIndex, pLen)
    //从庄家开始发牌
    while (cards.length > pLen) {
      cycleList.forEach(i => {
        player["civilian"][i]._pokerCardList.push(cards.shift())
      })
    }
    //返回剩余的牌，地主的牌
    return cards
  }

  //用Knuth-Durstenfeld Shuffle算法洗牌
  var _shuffle = function () {
    let len = _cards.length

    for (let i = len - 1; i > 0; i--) {
      let index = random(0, i)
      //随机位置和当前位置相同则不需交换
      if (index === i) {
        continue
      }
      let tmp = _cards[i]
      _cards[i] = _cards[index]
      _cards[index] = tmp
    }
    return _cards
  }

  //初始都为平民
  var _initPlayers = function () {
    for (let i = 0; i < PLAYER_NUMS; i++) {
      playerFactory("Player" + i, "civilian")
    }
    let civilians = _players["civilian"]
    let len = civilians.length
    for (let i = 1; i < len - 1; i++) {
      civilians[i]._beforePlayer = civilians[i - 1]
      civilians[i]._nextPlayer = civilians[i + 1]
    }
    civilians[0]._beforePlayer = civilians[len - 1]
    civilians[0]._nextPlayer = civilians[1]
    civilians[len - 1]._beforePlayer = civilians[len - 2]
    civilians[len - 1]._nextPlayer = civilians[0]
  }

  var _initBanker = function (index) {
    if (index) {
      _players["civilian"][index]._isBanker = true
    } else {
      let len = _players["civilian"].length
      let bankerIndex = random(0, len - 1)
      _players["civilian"][bankerIndex]._isBanker = true
    }
  }

  var _initCards = function () {
    _shuffle()
    _deal()
  }

  var _initLandlord = function () {
    let civilians = _players["civilian"]
    let len = civilians.length
    let bankerIndex = _findBankerIndex(civilians)
    let res = selectLandlord(civilians[(bankerIndex + 1) % len], _flag)
    //重新发牌,庄家为下家
    if (!res) {
      _initBanker((bankerIndex + 1) % len)
      _initCards()
    }
  }

  //规定初始化流程
  var _init = function () {
    _initPlayers()
    _initBanker()
    _initCards()
  }

  var getPlayers = function () {
    return _players
  }


  return {
    playerNums: _playerNums,
    flag: _flag,
    init: _init,
    initLandlord: _initLandlord,
    getPlayers,
    reciveMessage
  }
}

module.exports = playerDirector