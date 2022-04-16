const Bot = require('../bot.js')
const utils = require('../helpers/utils.js')

class PersonBot extends Bot {
  constructor (client, command, name, phrases) {
    super(client, command)
    this.phrases = phrases
    this.name = name
  }

  handleMessage (message, args) {
    const items = this.phrases
    const newMessage = utils.getRandomFromArray(items)

    const that = this
    message.guild.me.setNickname(that.name)
      .then(user => { message.channel.send(newMessage, that.formatOptions(args)) })
      .catch(err => { console.log('Error on sending message', err) })
  }

  formatOptions (args) {
    const tts = args.includes('tts')
    return { tts: tts }
  }
}

module.exports = PersonBot
