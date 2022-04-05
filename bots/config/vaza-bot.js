const Bot = require('../bot.js')
const { getVoiceConnection } = require('@discordjs/voice')

class VazaBot extends Bot {
  getCommandIdentifier () {
    return 'vaza'
  }

  startConfig (client, message, args) {
    this.leaveVoiceChannel(message)
  }

  leaveVoiceChannel (message) {
    const connection = getVoiceConnection(message.guild.id)

    if (!connection) return

    connection.destroy()
  }
}

module.exports = VazaBot
