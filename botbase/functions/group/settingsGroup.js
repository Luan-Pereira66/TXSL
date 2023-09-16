class SettingGroup {
  constructor(bot, from){
    this.bot = bot;
    this.from = from;
  }

  // adicionar, promover, remover ou rebaixar membro de grupos
  async updateMembersGroup(edit, ctt){
    var e;
    if(edit === 'add'){
      e = 'add'
    } else if(edit === 'pro'){
      e = 'promote'
    } else if(edit === 'rem'){
      e = 'remove'
    } else if(edit === 'dem'){
      e = 'demote'
    } else {
      console.log('error: updateMembersGroup => Invalid Edit')
      return
    }

    await this.bot.groupParticipantsUpdate(
        this.from, 
        [`${ctt}@s.whatsapp.net`],
        e // replace this parameter with "remove", "demote" or "promote"
    )
    
  }

  // Remover foto do grupo
  async removePhotoGroup(){
      await this.bot.removeProfilePicture(this.from)
  }

  // mudar nome do grupo
  async updateGroupName(name){
    await this.bot.groupUpdateSubject(this.from, name)
  }

  // mudar descrição do grupo
  async updateDescriptionGroup(subject){
    await this.bot.groupUpdateDescription(this.from, subject)
  }

  // quem pode mandar mensagem no grupo: users or admins
  async updateSettingsGroup(configGrp){

    if(configGrp === "fechar"){
      // fechar o grupo para admins
      await this.bot.groupSettingUpdate(this.from, 'announcement')
      
    } else if(configGrp === "abrir"){
      // abrir o grupo para todos
      await this.bot.groupSettingUpdate(this.from, 'not_announcement')
      
    } else if(configGrp === "abrir-membro"){
      // abrir ediçao do grupo para membros
      await this.bot.groupSettingUpdate(this.from, 'unlocked')
      
    } else if(configGrp === "fechar-membro"){
      // fechar edicao do grupo para membros
      await this.bot.groupSettingUpdate(this.from, 'locked')
    }

  }

  // mudar link do grupo
  async groupRevokeInvite(){
    const code = await this.bot.groupRevokeInvite(this.from)
    return code;
  }

  // gerar link do grupo
  async groupGetInvite(){
    const code = await this.bot.groupInviteCode(this.from)
    return code;
  }

  async mention(participant, marcarMsg){
    await this.bot.sendMessage(this.from, { text: marcarMsg, mentions: participant })
  }
  
}

module.exports = SettingGroup;
