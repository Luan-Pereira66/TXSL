// configuração simples do bot
const config = JSON.parse(fs.readFileSync('../../../data/dono/dono.json', 'utf8'));

const nomeDono = config.nomeDono;

async function SeloVerificado() {
  const selo = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
      "extendedTextMessage": {
        "text": `👨‍💻 Dev: ${nomeDono}`,
        "title": "hmm"
      }
    }
  }

  return selo;
}

module.exports = SeloVerificado;