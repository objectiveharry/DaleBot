const PersonBot = require('./person-bot.js');

class JoaoBot extends PersonBot {
    getPhrases() {
        return [
            "Essa idade fazendo isso é mole", 
            "Foda é quando você sofre um acidente e o médico tem que rasgar a roupa",
            "esse dai conhece varios paus",
            "Gostei desse filme aí que ele coloca o nome dos caras de uma forma diferente",
            "Tá misturando o antigo com o passado",
            "Ó o policial travesso",
            "Deixa eu falar, eu quero falar, abaixo a ditadura",
            "Dale cigarrinho. É o pão com manteiga dela",
            "Olha o mapa tático"
        ];
    }

    getCommandIdentifier() {
        return "joao"
    }
    
    getName() {
        return "JoaoV"
    }
}

module.exports = JoaoBot