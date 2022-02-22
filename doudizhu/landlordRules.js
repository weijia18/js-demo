var selectLandlord = function (midPlayer, flag) {
  let beforePlayer = midPlayer._beforePlayer || {}
  let nextPlayer = midPlayer._nextPlayer || {}
  switch (flag) {
    case "1111":
      beforePlayer._isLandlord = true
      break
    case "1110":
      nextPlayer._isLandlord = true
      break
    case "1101":
      beforePlayer._isLandlord = true
      break
    case "1100":
      midPlayer._isLandlord = true
      break
    case "1011":
      beforePlayer._isLandlord = true
      break
    case "1010":
      nextPlayer._isLandlord = true
      break
    case "1000":
      beforePlayer._isLandlord = true
      break
    case "0111":
      midPlayer._isLandlord = true
      break
    case "0110":
      nextPlayer._isLandlord = true
      break
    case "0100":
      midPlayer._isLandlord = true
      break
    case "0001":
      nextPlayer._isLandlord = true
      break;
    case "0000":
      return false
  }
  return true
}

module.exports = selectLandlord