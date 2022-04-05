const {
  Client,
  Intents
} = require('discord.js')
const BotManager = require('./bots/bot-manager.js')

// Initialize Discord Bot
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
})
const bot = new BotManager()

client.on('ready', () => {
  bot.handleStart(client)
})

client.on('messageCreate', (message) => {
  bot.handleMessage(message)
})

client.login(bot.authToken)
