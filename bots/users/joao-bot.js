const PersonBot = require('./person-bot.js')

class JoaoBot extends PersonBot {
  constructor (client) {
    super(client,
      'joao',
      'JoaoV')
  }
}

module.exports = JoaoBot
