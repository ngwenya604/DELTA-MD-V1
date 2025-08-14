
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "deltacore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RUd3F3WDkvYzg2OXVhNGhJTjYrWSs0WDVaUURjWjMyM2dmY3JIcXhVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JSbnJ3T2ZxYjAvalVGcHNuaVE5eFdyWGp1bDg3SDBKY0kvbUczWjQxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRlcrOElrRUlrTlFWNkN6dUdjaVhMRTNyNGx3bWJPZmpUQXliTm5vUEc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUndVdi9xWDgxQ1NFS2R5TS9pMHM5SXcwREFDK0lDN205c2JBWER0QVFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLVlBxTnNYdVJlY0FuVlpWNDlrSW5MQ050YUx4QXdMUGw5aSsvWmFRSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNNaEpld3pyMVZVVmlKOGNXaWYwa1NScU9SR3NOVjh6c0tQckd1b2I5bms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xmZ0NCQmtkcXo1T1BzaHhESVA0dWxwTjBNdnVtS2tkblpIOHl2RC9tbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlJ5MWpLaDZrT2NyUUZkU2NPcEo1L0lwalFqVklZZXg5SnJDeEdYL2tUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImozT0xTZzg2ZVlvc2xvVWpRSEVQUEhxaWIwSlJENStyZGVmVkhua3NPOFZibyt4dStWRFBJeGVNclMrOXJ6bTZEZW4ydUtnWE5nbWt3c0FBN3YwQkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJlV203UHovenpyUU1RVEVaRW9seno3c0FHK094VndwTld3VE9sOU41MU1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NzE0MzI3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNjlDQjNCQ0FDOUZFMENCNzg5OTk0MjFCNUQzRTI5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MTc1ODQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzcxNDMyNzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDEzNEQ3RDI0NTAyMzJDMTM2OTc1RTBERTJBRkM3RDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTE3NTg0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQU1UQVNMMUgiLCJtZSI6eyJpZCI6IjI2Mzc3NzE0MzI3NzoyNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExMjk1ODI0Mzg3Njk5MzoyNkBsaWQiLCJuYW1lIjoi4pyw4bWA4bS34bS54bSN4bSP4bSFc+KcsCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5aeDdnQkVJKzM5OFFHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUWlicGVDZHZDTnFmK3l2cGh1MEFqK3RiZGYxY3BydkxXcTZsNFRrOHpEVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYktYZXdiUWVHNEZjOUt1VjlBd1lFUjFDT2N6cjkxU1VBSlZyRWU4dGRoREpJbW5jQW5ublBsNXAwUDdidUozOGsrZGc3Zm1ERVR2VjduSGhBQzQ4REE9PSIsImRldmljZVNpZ25hdHVyZSI6InUzTEY0L1hMRWtyaS9ySDVMSk5pa0Fna2Z6VEtqOHRJekp0TlVJanB1TStiOW5sb3VOMHV5M0hKWGlPMXpFOWxsRnc1cmtWaVg0OTcySURPbWhDSUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc3MTQzMjc3OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVJbTZYZ25id2phbi9zcjZZYnRBSS9yVzNYOVhLYTd5MXF1cGVFNVBNdzEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTE3NTg0MCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJYMSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DELTA-MD-V1*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DELTA-MD-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DELTA-MD-V1",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263788521064",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "FRONTIER SIR",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ delta ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/493ur5.jpg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/0go0uy.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263788521064",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
