const Bot = require('../bot.js')

class RoletaRussaBot extends Bot {
  getCommandIdentifier () {
    return 'roleta'
  }

  startConfig (client, message, args) {
    this.kickRandomUser(message)
  }

  kickRandomUser (message) {
    const voiceChannel = message.member.voice.channel

    if (!voiceChannel) return

    const users = voiceChannel.members
    const indexDaMorte = Math.floor(Math.random() * users.size)

    let index = 0;
    users.each((member) => {
      if (index == indexDaMorte) {
        member.voice.disconnect()
      }
      index += 1
    });
  }
}

module.exports = RoletaRussaBot
