class ProfileBot {
  constructor(bot, from){
    this.bot = bot;
    this.from = from;
  }

  // atualizar nome do perfil do bot
  async updateNameProfileBot(name){
    await this.bot.updateProfileName(name)
  }

  // atualizar recado do perfil do bot
  async updateStatusProfileBot(text){
    await this.bot.updateProfileStatus(text)
  }

  
}

module.exports = ProfileBot
