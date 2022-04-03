const Bot = require('../bot.js');

class PersonBot extends Bot {
    getPhrases() {
        return []
    }

    getName() {
        ""
    }

    sendRandomMessage(client, message, args) {
        var items = this.getPhrases();
        var newMessage = items[Math.floor(Math.random() * items.length)];
        
        var that = this;
        message.guild.me.setNickname(that.getName())
            .then(user => { message.channel.send(newMessage, that.formatOptions(args)) })
            .catch(err => { console.log('Error on sending message', err) });
    }

    formatOptions(args) {
        const tts = args.includes("tts");
        return {tts: tts};
    }
}

module.exports = PersonBot