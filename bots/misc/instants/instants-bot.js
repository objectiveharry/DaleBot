const Bot = require('../../bot.js')
const request = require('request')
const {
  joinVoiceChannel,
  entersState,
  createAudioPlayer,
  createAudioResource,
  StreamType,
  AudioPlayerStatus,
  VoiceConnectionStatus
} = require('@discordjs/voice')

class InstantsBot extends Bot {
  constructor (client) {
    super(client, 'instant')
    this.player = createAudioPlayer()
  }

  instantSearchQuery (args) {
    return args.join(' ')
  }

  validURL (str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
    return !!pattern.test(str)
  }

  handleMessage (message, args) {
    const query = this.instantSearchQuery(args)
    if (query == null) {
      return
    }
    console.log(query)

    let url = ''
    if (this.validURL(query)) {
      url = query
    } else {
      url = 'https://www.myinstants.com/search/?name=' + query.split(' ').join('+')
    }

    console.log(url)

    const that = this
    request({ uri: url },
      function (error, response, body) {
        console.error('error:', error)
        that.parseHTMLfirstResult(body, message)
      }
    )
  }

  parseHTMLfirstResult (body, message) {
    if (body == null) {
      return
    }

    const pattern = /onmousedown="play\('(.*?)'\)"/g
    const results = body.match(pattern)
    this.sendVoiceMessage(message, results)
  }

  sendVoiceMessage (message, instant) {
    if (instant == null) {
      return
    }
    console.log(instant)
    let pattern = /onmousedown="play\('/
    let name = instant[0].replace(pattern)
    pattern = /'\)"/
    // There is a better way to handle that. I need better reg exp
    name = name.replace(pattern)
    name = name.replace('undefined')
    name = name.replace('undefined', '')
    name = name.replace('undefined', '')

    const connection = joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
    })

    entersState(connection, VoiceConnectionStatus.Ready, 30e3)

    const url = 'https://www.myinstants.com' + name

    console.log(url)

    const resource = createAudioResource(url,
      {
        inputType: StreamType.Arbitrary
      })

    this.player.play(resource)

    entersState(this.player, AudioPlayerStatus.Playing, 5e3)

    connection.subscribe(this.player)
  }
}

module.exports = InstantsBot
