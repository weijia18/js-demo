function myNew(fn){
  let obj = Object.create(fn.prototype)

  let res = fn.apply(obj, Array.prototype.slice(1))

  return res instanceof Object ? res : obj
}