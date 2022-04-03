const PersonBot = require('./person-bot.js');

class IgorBot extends PersonBot {
    getPhrases() {
        return [
            "Pandora?",
            "Ô Rafa, hoje eu vou assistir aqui, não dá não",
            "(baixinho)Vai tomar no cu",
            "Não to rindo não",
            "Ah vai tomar no cu, Sev",
            "Não consegue ficar um segundo sério, porra",
            "Vou esquentar a água aqui peraí",
            "É o cheiro da camomila",
            "Alou",
            "Bota aí, sanduíche Beirute",
            "JÁ VOU",
            "Eu não sou comedor de casadas não",
            "Tô no meio e já sei mais do que você",
            "Escorregou no tomate",
            "O baby é o mago na foda",
            "Reecontrei com minha espécie",
            "Salivei pela boca e pelo pau",
            "Será que ele ta no loop também?",
            "Ali o azul com vermelho. Morte",
            "Meu pau pode ou não pode estar na sua boca",
            "Que nem o nosso pequeno sexo",
            "A única frase que prestei atenção foi almoco a 1 e janta as 7 e meia",
            "Depois da guerra voce bota o piru ate na boquinha da arma",
            "Vai tomar no cu Igor",
            "Vou te embutir que nem uma linguiça",
            "Vou chupar teu cu",
            "Pesquisa Sabrina Sato e clica Estou com Sorte",
            "Porra eu to falando pra caralho, não acredito que to mutado",
            "Vou spamar o bot, cuzao",
            "Arrombado",
            "Será que se esquentar ele fica molinho?",
            "Eles dão uma salgadela no malaquias",
            "Eu gosto de grávidas"
        ];
    }

    getCommandIdentifier() {
        return "rafa"
    }

    getName() {
        return "Koffing"
    }
}

module.exports = IgorBot