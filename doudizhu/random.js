const random = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}
module.exports = random