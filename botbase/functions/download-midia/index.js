const { writeFile } = require('fs/promises')
const { downloadMediaMessage } = require('@whiskeysockets/baileys')

async function downloaderMidia(bot){
  bot.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0]

    if (!m.message) return 
    const messageType = Object.keys (m.message)[0]

    if (messageType === 'imageMessage') {
        // download the message
        const buffer = await downloadMediaMessage(
            m,
            'buffer',
            { },
            { 
                logger,
                // pass this so that baileys can request a reupload of media
                // that has been deleted
                reuploadRequest: bot.updateMediaMessage
            }
        )
        // save to file
        await writeFile('./temp/img.jpeg', buffer)
    }
  })
}

module.exports = downloaderMidia;


