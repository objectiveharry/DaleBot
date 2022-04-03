const PersonBot = require('./person-bot.js');

class BabyBot extends PersonBot {
    getPhrases() {
        return [
            "Não, ô arrombado",
            "Sim sim. É ele mesmo. Sim. Isso, Igor. Não, é isso aí.",
            "Cara de safada, espera a risadinha dela",
            "Só assisto filme mais novo que eu",
            "Você levantou eu tive que cortar",
            "Na lua cê caga menos",
            "Subiu como uma criança desceu como um homem",
            "Albionzada?",
            "Dale",
            "Bota em HD aí",
            "É porque eu sou o brabo",
            "É a Taylor?",
            "Galera tá passiva agressiva",
            "Pra que as leis existem? Para serem quebradas",
            "Bota a tela cheia, quero me sentir no cinema",
            "Pelo menos não tem bicha, né?",
            "Onde tá o filme? O filme tá no cinema pô",
            "Bota em 4K",
            "Pra falar tem que ter visto desde o começo",
            "ja sabe como isso vai terminar...",
            "A criança vestida de Cinderela. Se não for aniversario dela vai ser muito esquisito",
            "Não acredito em aniversário, tem que merecer pra ganhar o biscoitinho do Scooby",
            "Impressão minha ou Sidney Magal parece a Dilma?",
            "A floresta Snoopy Dog aí",
            "Foi o Igor ou foi o bot que ralou?",
            "Vamos ver quantas vezes o Igor vai me insultar nesse filme",
            "Eu tô apreciando o filme, Igor",
            "Todo mundo aqui paga Netflix, né?",
            "Essa aí não é frase minha. É do governo",
            "Já comi pão do Subway maior",
            "É. Vamos nessa",
            "Eu to sugando",
            "Deixou o cara com gostinho de quero mais",
            "Sobrou a MILF ali",
            "Macho racista",
            "Essa mina ta na disney já",
            "Toma piranha",
            "Essa aí ta facilitando demais",
            "Foi comprar uma foda... Uma soda",
            "Balança o mouse aqui pra ver"
        ];
    }

    getCommandIdentifier() {
        return "dale"
    }

    getImage() {
        return "https://cdn.discordapp.com/avatars/204936159325978627/1819fe42aad29bcc94853a1eeabc9f3c.png"
    }

    getName() {
        return "Harry"
    }
}

module.exports = BabyBot