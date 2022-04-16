class Bot {
  constructor (client, command) {
    this.client = client
    this.command = command
  }

  handleMessage (message, args) {}
}

module.exports = Bot
