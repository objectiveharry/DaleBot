const Discord = require('discord.js');
const BotManager = require('./bots/bot-manager.js');

// Initialize Discord Bot
const client = new Discord.Client();
const bot = new BotManager();

client.on('ready', () => {
    bot.handleStart(client);
});

client.on('message', (message) => {
    bot.handleMessage(message, client);
});

client.login(bot.authToken);