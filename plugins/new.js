// new.js

const getContextInfo = (sender) => ({
    mentionedJid: [sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363401408526266@newsletter',
        newsletterName: 'DELTA-MD-V1-SUPPORT',
        serverMessageId: 999
    }
});

module.exports = { getContextInfo };
