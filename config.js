const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Abuja"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Abujau";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2347088417411&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "WisdomUb" 


global.devs = "2347088417411" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347088417411";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_34_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2bFJDRllPVXliUk9md1RCbk03cjJPNFgyUWgxaXY0RkhkK29DcCtnZENVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTjBtWWd4SFRaS1lWdTNaS29UdUJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlZDQwYTllLTNjODQtNDI5OC1hOWViLWY1Yjc2MzE3N2I1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDEyMixcbiAgICAgIDgzLFxuICAgICAgODYsXG4gICAgICA2NSxcbiAgICAgIDI0LFxuICAgICAgMzksXG4gICAgICAyMzEsXG4gICAgICAyNDMsXG4gICAgICAxMCxcbiAgICAgIDE5NixcbiAgICAgIDUsXG4gICAgICAxOTcsXG4gICAgICAxNDMsXG4gICAgICA4NCxcbiAgICAgIDEyMixcbiAgICAgIDIwMCxcbiAgICAgIDY4LFxuICAgICAgMjI1LFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgOTMsXG4gICAgICAxNjcsXG4gICAgICAxOTMsXG4gICAgICAxNTAsXG4gICAgICAxNjIsXG4gICAgICA3MCxcbiAgICAgIDI1MCxcbiAgICAgIDEzOCxcbiAgICAgIDE1NSxcbiAgICAgIDE0NixcbiAgICAgIDIzOCxcbiAgICAgIDEzNyxcbiAgICAgIDIzMixcbiAgICAgIDEyNCxcbiAgICAgIDE3OCxcbiAgICAgIDE4NyxcbiAgICAgIDEwOSxcbiAgICAgIDE5MCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWUNMTVNLTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4ODQxNzQxMTo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM4MzQxMzY2Mzk1MTAzOjkyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPMGthY0dFTStBaHJjR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjJMN1ZFR09xaXhtOU1VNWtQUWFnM3FIQngvaUlLZm03bjhhVVZ1azAxTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBenZNN3EwRUN5cEJVNWdWM0NHYmg3Q0YzaVBtalRqOWl4OVBRSlBNRXVkbTA1SGNoc3hQNGFESXlob1UxcFlFSk5hWXdldHBRQUo1VlJlVk1qMHBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJacTNaaC8zTjdaRnp6SG5OTTBqSEsxVStzbTBjY2Z6c0p4cW5jVHZCSjUxZUE2WFRoRmJyMk1XWi85S1pLbW1YeEhDQ2pIMDFRck1mN2U0dnFaWE1EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg4NDE3NDExOjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYwNTQ0ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBbFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFsVi5qc29uIjogIntcImtleURhdGFcIjpcIkVSNnBqMVltV2llWlN5azQzNnp1bWZCTEZMZFZIcmt1V2xKWVdIVzNEeXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MjY4Njk2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTgyNjM4NjIxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡WisdomUb彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Solomon",
  ownername:process.env.OWNER_NAME|| "★彡WisdomUb彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
