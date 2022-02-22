var PokerCard = require("./PokerCard")

//黑红梅方
const SPADE = '♠️'
const HRAET = '♥️'
const CLUB = '♣️'
const DIAMOND = '♦️'

const nums = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K']

var pokerCardFactory = function () {
  var uid = 1
  var pokerCards = []
  for (let i = 0; i < 13; i++) {
    pokerCards.push(new PokerCard(nums[i], uid++, SPADE))
    pokerCards.push(new PokerCard(nums[i], uid++, HRAET))
    pokerCards.push(new PokerCard(nums[i], uid++, CLUB))
    pokerCards.push(new PokerCard(nums[i], uid++, DIAMOND))
  }
  return pokerCards
}

module.exports = pokerCardFactory