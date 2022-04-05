const PersonBot = require('./person-bot.js')

class VictorBot extends PersonBot {
  getPhrases () {
    return [
      'Agora só como cu de curioso',
      'Depois eu explico o tamanho da minha rola pra sua boca',
      //  "Botou o pé no chão sentada no vaso, já dá pra mamar",
      'Posso suturar o seu cu, Igor?',
      'Ele que chupa e ela que fica apaixonada',
      'Filmezada é sempre uma caixinha de surpresas... A quantidade de merda que vocês trazem'
    ]
  }

  getCommandIdentifier () {
    return 'victor'
  }

  getName () {
    return 'Victor Eduardo'
  }
}

module.exports = VictorBot
