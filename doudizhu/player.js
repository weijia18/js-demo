
var PokerCard = require("./PokerCard")
class Player{
  constructor (name, type){
    this._name = name
    this._type = type
    this._isLandlord = this._type === 'landlord' ? true :false
    this._pokerCardList = []
    this._partners = []
    this._enemies = []
  }
  /**
   * 出牌
   * @param {*} list ,每个元素为PokerCard对象
   */
  play(list) {
    this.list.forEach(v => {
      this._pokerCardList.forEach((it, index) =>{
        if(v.id === it.id){
          this._pokerCardList.splice(index, 1)
        }
      })
    });
  }

  /**
   * 不出牌
   * 什么也不做
   */
  notPlay(){
    return
  }

  /**
   * 叫地主
   */
  getPublicCards(list){
    this._pokerCardList = this._pokerCardList.concat(list)
  }
}