const {getContextInfo} = require('./new')
const fs = require('fs');
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')



//vcf//

cmd({
    pattern: 'savecontact',
    alias: ["vcf","scontact","savecontacts"],
    desc: 'gc vcard',
    category: 'group',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command is for groups only.");
        if (!isOwner) return reply("*_This command is for the owner only_*");

        let card = quoted || m; // Handle if quoted message exists
        let cmiggc = groupMetadata;
        const { participants } = groupMetadata;
        
        let orgiggc = participants.map(a => a.id);
        let vcard = '';
        let noPort = 0;
        
        for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`;
        }

        let nmfilect = './contacts.vcf';
        reply('Saving ' + cmiggc.participants.length + ' participants contact');

        fs.writeFileSync(nmfilect, vcard.trim());
        await sleep(2000);

        await conn.sendMessage(from, {
            document: fs.readFileSync(nmfilect), 
            mimetype: 'text/vcard', 
            fileName: 'prince_tech.vcf', 
            caption: `\nDone saving.\nGroup Name: *${cmiggc.subject}*\nContacts: *${cmiggc.participants.length}*\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ delta ᴛᴇᴄʜ`,
	contextInfo: getContextInfo(m.sender)
        }, { quoted: mek });

        fs.unlinkSync(nmfilect); // Cleanup the file after sending
    } catch (err) {
        reply(err.toString());
    }
});




gmd({
  pattern: 'savecontact',
  alias: ['vcf', 'scontact', 'savecontacts'],
  desc: 'Save group participants as vCard',
  category: 'group',
  filename: __filename
}, async (Gifted, mek, m, {
  from, quoted, isGroup, isOwner, groupMetadata, reply
}) => {
  try {
    if (!isGroup) return reply("This command is for groups only.");
    if (!isOwner) return reply("*_This command is for the owner only_*");

    const participants = groupMetadata?.participants || [];
    let vcard = '';
    let index = 1;

    for (let member of participants) {
      const id = member.id.split('@')[0];
      vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${index++}] +${id}\nTEL;type=CELL;type=VOICE;waid=${id}:+${id}\nEND:VCARD\n`;
    }

    const vcfFile = './contacts.vcf';
    fs.writeFileSync(vcfFile, vcard.trim());

    reply(`Saving ${participants.length} participants contact...`);
    await delay(1500);

    await Gifted.sendMessage(from, {
      document: fs.readFileSync(vcfFile),
      mimetype: 'text/vcard',
      fileName: 'prince_tech.vcf',
      caption: `\nDone saving.\nGroup Name: *${groupMetadata.subject}*\nContacts: *${participants.length}*\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ delta ᴛᴇᴄʜ`,
    }, { quoted: mek });

    fs.unlinkSync(vcfFile); // Cleanup
    await m.react('✅');
  } catch (err) {
    reply(`❌ Error: ${err.message}`);
  }
});
