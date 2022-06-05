const Bot = require('../../default-bots/bot.js')

class WorldCupCounterBot extends Bot {
  constructor (client) {
    super(client, 'diaspracopa')
    this.startDate = new Date('11/21/2022')
  }

  handleMessage (message, args) {
    const today = new Date()
    const difference = this.startDate.getTime() - today.getTime()
    const days = Math.ceil(difference / (1000 * 3600 * 24))

    const newMessage = 'Faltam ' + days + ' dias para a copa do mundo!'

    message.channel.send(newMessage)
  }
}

module.exports = WorldCupCounterBot
