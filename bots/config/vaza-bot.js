const Bot = require('../default-bots/bot.js')
const { getVoiceConnection } = require('@discordjs/voice')

class VazaBot extends Bot {
  constructor (client) {
    super(client, 'vaza')
  }

  handleMessage (client, message, args) {
    this.leaveVoiceChannel(message)
  }

  leaveVoiceChannel (message) {
    const connection = getVoiceConnection(message.guild.id)

    if (!connection) return

    connection.destroy()
  }
}

module.exports = VazaBot
