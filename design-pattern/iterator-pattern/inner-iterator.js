//内部迭代器以jQuery的each为例
var each = function (obj, callback) {
  var i,
    value,
    len = obj.lenght
  _isArray = isArraylike(obj)

  if (_isArray) {
    for (i = 0; i < len; i++) {
      value = callback.call(obj[i], i, obj[i])
      if (value === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i])
      if (value === false) {
        break
      }
    }
  }
  return obj
}