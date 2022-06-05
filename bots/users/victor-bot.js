const PersonBot = require('./person-bot.js')

class VictorBot extends PersonBot {
  constructor (client) {
    super(client,
      'victor',
      'Victor Eduardo')
  }
}

module.exports = VictorBot
