const PersonBot = require('./person-bot.js')

class BabyBot extends PersonBot {
  constructor (client) {
    super(client,
      'dale',
      'Harry')
  }
}

module.exports = BabyBot
