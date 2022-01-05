module.exports = function reverse(n) {
  return +(Math.abs(n) + '').split('').reduce((acc, elem) => elem + acc);
}
