const PersonBot = require('./person-bot.js')

class IgorBot extends PersonBot {
  constructor (client) {
    super(client,
      'rafa',
      'Koffing')
  }
}

module.exports = IgorBot
