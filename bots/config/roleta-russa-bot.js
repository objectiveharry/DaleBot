const Bot = require('../bot.js')
const utils = require('../helpers/utils.js')
require('dotenv').config()

class RoletaRussaBot extends Bot {
  constructor (client) {
    super(client, 'roleta')
    this.channelId = process.env.BR_HUE_MAIN_CHAT_ID
    this.kickMessages = [
      '{0} foi de ninho kkkkkkkk',
      '{0} foi de berço kkkkkkkk',
      '{0} foi de base kkkkkkkk',
      '{0} foi a mimir kkkkkkkk'
    ]
    this.timer = undefined // TODO: get from db to save state?
    this.timeDifference = process.env.TIME_DIFFERENCE_IN_MINUTES
  }

  handleMessage (message, args) {
    this.kickRandomUser(message)
  }

  formatMemberIdMessage (member) {
    return '<@' + member.id + '>'
  }

  sendEnterChannelMessage (member) {
    const userId = this.formatMemberIdMessage(member)
    const message = '{0} entra no canal antes ô burro'.format(userId)

    this.client.channels.cache.get(this.channelId).send(message)
  }

  sendDisconnectMessage (member) {
    member.voice.disconnect()
    const kick = utils.getRandomFromArray(this.kickMessages)
    const userId = this.formatMemberIdMessage(member)
    const message = kick.format(userId)

    this.client.channels.cache.get(this.channelId).send(message)
    this.timer = new Date()
  }

  sendTimerMessage (member) {
    const userId = this.formatMemberIdMessage(member)
    const message = '{0} calma lá meu chapa. Com grandes poderes vem grandes responsabilidades'.format(userId)

    this.client.channels.cache.get(this.channelId).send(message)
  }

  canKickNow () {
    if (this.timer === undefined) {
      return true
    }

    const today = new Date()
    const difference = this.timer.getTime() - today.getTime()
    const minutes = Math.floor((difference / 1000) / 60)

    return minutes > this.timeDifference
  }

  kickRandomUser (message) {
    const voiceChannel = message.member.voice.channel

    if (!voiceChannel) {
      this.sendEnterChannelMessage(message.member)
      return
    }

    const users = voiceChannel.members
    const indexDaMorte = Math.floor(Math.random() * users.size)

    let index = 0
    users.each((member) => {
      if (index === indexDaMorte) {
        if (this.canKickNow()) {
          this.sendDisconnectMessage(member)
        } else {
          this.sendTimerMessage(member)
        }

        return
      }
      index += 1
    })
  }
}

module.exports = RoletaRussaBot
