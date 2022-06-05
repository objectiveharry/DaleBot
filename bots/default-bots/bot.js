class Bot {
  constructor (client, command) {
    this.client = client
    this.command = command
  }

  handleMessage (message, args) {}

  sendTextMessage (originalMessage, textMessage, formatOptions) {
    originalMessage.channel.send(textMessage, formatOptions)
  }

  setNickname (message, nickname) {
    return message.guild.me.setNickname(nickname)
  }
}

module.exports = Bot
