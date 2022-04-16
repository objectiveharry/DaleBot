
function getRandomFromArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}

if (!String.prototype.format) {
  String.prototype.format = function () {
    const args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match
    })
  }
}

module.exports = { getRandomFromArray }
