const dotenv = require('dotenv');
const BabyBot = require('./users/baby-bot.js');
const IgorBot = require('./users/igor-bot.js');
const DanielBot = require('./users/daniel-bot.js');
const VictorBot = require('./users/victor-bot.js');
const JoaoBot = require('./users/joao-bot.js');
const InstantsBot = require('./instants/instants-bot.js');

var babyBot = new BabyBot();
var igorBot = new IgorBot();
var danielBot = new DanielBot();
var victorBot = new VictorBot();
var joaoBot = new JoaoBot();

var instantsBot = new InstantsBot();
// Comentário Sev: "O Batman"
class BotManager {

    get authToken() {
        dotenv.config();
        return process.env.DISCORD_AUTH_TOKEN
    }

    handleStart(client) {
        console.log('Connected');
        client.user.setAvatar('./resources/img/profile-image.jpeg');
    }

    handleMessage(message, client) {
        console.log("mensagem recebida");

        const content = message.content;

        if (content.substring(0, 1) == '!') {
            var args = content.substring(1).split(' ');
            const cmd = args[0];

            args = args.splice(1);
            console.log(cmd);
            switch (cmd) {
                case babyBot.getCommandIdentifier():
                    babyBot.sendRandomMessage(client, message, args);
                    break;
                case igorBot.getCommandIdentifier():
                    igorBot.sendRandomMessage(client, message, args);
                    break;
                case danielBot.getCommandIdentifier():
                    danielBot.sendRandomMessage(client, message, args);
                    break;
                case victorBot.getCommandIdentifier():
                    victorBot.sendRandomMessage(client, message, args);
                    break;
                case joaoBot.getCommandIdentifier():
                    joaoBot.sendRandomMessage(client, message, args);
                    break;
                case instantsBot.getCommandIdentifier():
                    instantsBot.findInstants(message, args);
                    break
            }
        }
    }
}

module.exports = BotManager



// Github add {cmd} {frase}

