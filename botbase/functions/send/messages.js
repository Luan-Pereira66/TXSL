//const SeloVerificado = require('./util/seloVerificadoWpp.js')

const selo = '' //SeloVerificado()

class Messages {
  constructor(bot, from, messageBot){
    this.bot = bot;
    this.from = from;
    this.messageBot = messageBot;

  }

  // enviar texto comum
  async enviar(msg) {
    await this.bot.sendMessage(this.from, {text: msg}, {quoted: this.messageBot /*selo*/});
  }

  // enviar imagem + legenda
  async enviarImagem(url, legenda){
    const img = {
      image: {url: url},
      caption: legenda,
      footer: 'Bot de Whatsapp'
    }

    await this.bot.sendMessage(this.from, img, {quoted: this.messageBot/*selo*/})
  }

  // reagir à uma mensagem 
  async reagir(emoji){
    const reacao = {
      react: {
        text: emoji,
        key: this.messageBot.key
      }
    }
    
    await this.bot.sendMessage(this.from, reacao)
  }

}


module.exports = Messages;