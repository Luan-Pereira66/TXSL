const now = new Date()

// obtendo dia
let dia = now.getDate()
let mes = now.getMonth()
let ano = now.getFullYear()

if(dia < 10){
  dia = `0${dia}`
  mes = `0${mes}`
}

/*
if(mes < 10){
  mes = `0${mes}`
}*/


let horario = now.getHours()
let minutos = now.getMinutes()
let segundos = now.getSeconds()

if(horario < 10){
  horario = `0${horario}`
}

if(minutos < 10){
  minutos = `0${minutos}`
}

if(segundos < 10){
  segundos = `0${segundos}`
}


// formatando data e hora
var data = `${dia}/${mes}/${ano}`;
var hora = `${horario - 3}:${minutos}:${segundos}`



const menuDono = (pushname,emoji,prefix,NomeDoBot,nomeDono) => {
// edite apenas o que tá dentro de `...`
    return `
╭━━✰°❀•°✮°•❀°✾✰━━╮
│╭━━───────━━╮
│╎Mestre: ${nomeDono}
│╎Bot: ${NomeDoBot}
│╎Prefixo: [ ${prefix} ]
│╎Data: ${data}
│╎Hora: ${hora}
│╰━━───────━━╯
╰━━✰°❀•°✮°•❀°✾✰━━╯

╭─━─━──━─━─╮
│[🔒] DONO
╰─━─━──━─━─╯
│${emoji}${prefix}mudarprefixo  (+pre)
│${emoji}${prefix}mudarnomedono (+nom)
│${emoji}${prefix}mudarnomebot  (+nic)
│${emoji}${prefix}mudarcttdono  (+num)
│${emoji}${prefix}mudarimgmenu  (+url)
╰─━─━──━─━─╯
`
}
exports.menuDono = menuDono;


   