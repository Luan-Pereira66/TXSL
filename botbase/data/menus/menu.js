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



const menu = (pushname,emoji,prefix,NomeDoBot,nomeDono) => {
// edite apenas o que tá dentro de `...`
    return `
╭━━✰°❀•°✮°•❀°✾✰━━╮
│╭━━───────━━╮
│╎Usuário: ${pushname}
│╎Bot: ${NomeDoBot}
│╎Prefixo: [ ${prefix} ]
│╎Data: ${data}
│╎Hora: ${hora}
│╰━━───────━━╯
╰━━✰°❀•°✮°•❀°✾✰━━╯
    
╭─━─━──━─━─╮
│[👨‍💻] COMANDOS
╰─━─━──━─━─╯
│${emoji}${prefix}login (+ nickname)
│${emoji}${prefix}ping
│${emoji}${prefix}perfil
│${emoji}${prefix}banir
│${emoji}${prefix}adicionar
│${emoji}${prefix}promover
│${emoji}${prefix}rebaixar
│${emoji}${prefix}fechargp
│${emoji}${prefix}abrirgp
│${emoji}${prefix}marcar (+ msg)
│${emoji}${prefix}boasvindas (+ on ou off)
│${emoji}${prefix}antilink (+ on ou off)
│${emoji}${prefix}menu (este msm)
│${emoji}${prefix}premium (+ ctt)
│${emoji}${prefix}descgp (+ texto)
│${emoji}${prefix}nomegp (+ nome)
│${emoji}${prefix}menudono
╰─━─━──━─━─╯
`
}
exports.menu = menu


   