
var PokerCard = require("./PokerCard")
var playerDirector = require("./playerDirector")
class Player {
  constructor(name, type, id, level) {
    this._id = id
    this._name = name
    this._type = type
    this._isLandlord = this._type === 'landlord' ? true : false
    this._isBanker = false //是否为庄家
    this._isAsk = false //是否叫过地主
    this._isSob = false //是否抢过地主
    this._pokerCardList = []
    this._beforePlayer = null
    this._nextPlayer = null
    this._level = level
    // this._partners = []
    // this._enemies = []
  }
  /**
   * 出牌
   * @param {*} list ,每个元素为PokerCard对象
   */
  play(list) {
    this.list.forEach(v => {
      this._pokerCardList.forEach((it, index) => {
        if (v.id === it.id) {
          this._pokerCardList.splice(index, 1)
        }
      })
    });
  }

  /**
   * 不出牌
   * 什么也不做
   */
  notPlay() {
    return
  }

  /**
   * 玩家指令
   */
  commands(commandType) {
    let flag
    switch (commandType) {
      case "askLandlord":
        flag = '1'
        playerDirector.reciveMessage("askLandlord", this, flag)
        break;
      case "notAskLanlord":
        flag = '0'
        playerDirector.reciveMessage("notAskLanlord", this, flag)
        break;
      case "sobLandlord":
        flag = '1'
        playerDirector.reciveMessage("sobLandlord", this, flag)
        break;
      case "notSobLandlord":
        flag = '0'
        playerDirector.reciveMessage("notSobLandlord", this, flag)
        break;
    }
  }
}


module.exports = Player