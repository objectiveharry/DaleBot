const dotenv = require('dotenv')
const BabyBot = require('./users/baby-bot.js')
const IgorBot = require('./users/igor-bot.js')
const VictorBot = require('./users/victor-bot.js')
const JoaoBot = require('./users/joao-bot.js')
const InstantsBot = require('./misc/instants/instants-bot.js')
const VazaBot = require('./config/vaza-bot.js')
const WorldCupCounterBot = require('./misc/world-cup/world-cup-counter-bot.js')

// Users
const babyBot = new BabyBot()
const igorBot = new IgorBot()
const victorBot = new VictorBot()
const joaoBot = new JoaoBot()

// Misc
const instantsBot = new InstantsBot()
const worldCupCounterBot = new WorldCupCounterBot()

// Config
const vazaBot = new VazaBot()

// Comentário Sev: "O Batman"
class BotManager {
  get authToken () {
    dotenv.config()
    return process.env.DISCORD_AUTH_TOKEN
  }

  handleStart (client) {
    this.client = client
    console.log('Connected')
    // client.user.setAvatar('./resources/img/profile-image.jpeg');
  }

  handleMessage (message) {
    console.log('mensagem recebida')

    const content = message.content

    if (content.substring(0, 1) === ';') {
      let args = content.substring(1).split(' ')
      const cmd = args[0]

      args = args.splice(1)
      console.log(cmd)
      switch (cmd) {
        case babyBot.getCommandIdentifier():
          babyBot.sendRandomMessage(this.client, message, args)
          break
        case igorBot.getCommandIdentifier():
          igorBot.sendRandomMessage(this.client, message, args)
          break
        case victorBot.getCommandIdentifier():
          victorBot.sendRandomMessage(this.client, message, args)
          break
        case joaoBot.getCommandIdentifier():
          joaoBot.sendRandomMessage(this.client, message, args)
          break
        case instantsBot.getCommandIdentifier():
          instantsBot.findInstants(message, args)
          break
        case vazaBot.getCommandIdentifier():
          vazaBot.startConfig(this.client, message, args)
          break
        case worldCupCounterBot.getCommandIdentifier():
          worldCupCounterBot.startConfig(this.client, message, args)
          break
      }
    }
  }
}

module.exports = BotManager

// Github add {cmd} {frase}
