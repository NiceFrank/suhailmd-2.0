const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129872434";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_44_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnRZN0huanc0V29JR2JGU1hOOVFwUCt2ODI1SDNuZER4cGlKcStIcVRDZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI5ODcyNDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MEY1NjNEQzE1N0U0NjE0M0ZERUE5NTMyOEIzRDg3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3ODU0ODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ241ZmhtRk9Sc2FqUEZidV95eFloQVwiLFxuICBcInBob25lSWRcIjogXCI3Mzc4MjIzOS01MDc4LTQwNTYtOWRhZS0wMzM0NzMyOWJlNjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMjQxLFxuICAgICAgMjQsXG4gICAgICAyNDgsXG4gICAgICAxNDUsXG4gICAgICAyNDEsXG4gICAgICAyMzQsXG4gICAgICAyMjQsXG4gICAgICAyNTMsXG4gICAgICAxMixcbiAgICAgIDIyMyxcbiAgICAgIDEzLFxuICAgICAgMjQ0LFxuICAgICAgMTEwLFxuICAgICAgNTEsXG4gICAgICAxMzcsXG4gICAgICA3OCxcbiAgICAgIDI5LFxuICAgICAgMTg2LFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMTYsXG4gICAgICAyMjcsXG4gICAgICA1NSxcbiAgICAgIDIyOSxcbiAgICAgIDUwLFxuICAgICAgMjEzLFxuICAgICAgMjEzLFxuICAgICAgMTEzLFxuICAgICAgMTg3LFxuICAgICAgMjgsXG4gICAgICA5NyxcbiAgICAgIDEwOSxcbiAgICAgIDIwOCxcbiAgICAgIDEzNixcbiAgICAgIDQzLFxuICAgICAgMTcyLFxuICAgICAgMixcbiAgICAgIDEyOCxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBSREVUS1hEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5ODcyNDM0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU2MDg5NDg2MDEwNTc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9UbE1rQ0VNbmhwcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvWnhlYTBTZGRKeWNmYzMyN2xuTEZXK0tJRzdVSTFBcjN5MmEyMWN3SFR3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNnUytkM3Y1ZHpYZjBpc0hZK1hqVWgwZjRSYnROMjNHUDgzOEVjYTBKbHVaYjRwTXMvZ1RsZndTWEswMnc2TXVnQXpyc1kwK0g0WFhOeU44VENXK0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5hM1FHdThVcjFFTlNSTUJZZTNLQmc0QWpyeUkxU0VNNDU1c0RZTUpTRHpKZzF0RTdWZUt4SkFlOGNBNWRCaU9LNzBpMHEzU0ZmekVxWVZzK09iaWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjk4NzI0MzQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDc4NTQ4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9kWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2RYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNHk0Y0F2ay9ZMFV5akhHblJzeklIRWdINFh3Ym9CNStwK3JqYmNrZWRaOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTAyOTMxMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
