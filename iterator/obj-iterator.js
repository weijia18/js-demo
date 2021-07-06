Object.prototype[Symbol.iterator] = function () {
  let keys = Object.keys(this)
  let index = 0
  let that = this
  return {
    next: function () {
      let key = keys[index]
      return index !== keys.length
        ? { key: key, val: that[key], done: false }
        : { key: key, val: that[key], done: true }
    }
  }
}



let obj = {
  aa: 1,
  bb: 2,
  cc: 3,
}

let it = obj[Symbol.iterator]()
console.log(it.next())