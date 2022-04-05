const Bot = require('../bot.js')

class PersonBot extends Bot {
  getPhrases () {
    return []
  }

  getName () {
    ''
  }

  sendRandomMessage (client, message, args) {
    const items = this.getPhrases()
    const newMessage = items[Math.floor(Math.random() * items.length)]

    const that = this
    message.guild.me.setNickname(that.getName())
      .then(user => { message.channel.send(newMessage, that.formatOptions(args)) })
      .catch(err => { console.log('Error on sending message', err) })
  }

  formatOptions (args) {
    const tts = args.includes('tts')
    return { tts: tts }
  }
}

module.exports = PersonBot
