const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="nairobi,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "africa/nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "25475894324" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254758943247";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254758943247,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254758943247,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID |"SUHAIL_09_55_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2RlZNTFhFYjlGK096Mll6eGVVRWJRSzlGNUxLdnZOU0lFbCtyaWdDS21VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKeG5nQzBvUlNBeTRNNXZPWW0xazNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0YmY2YTNmLWEzYWQtNDZmYy05ZGNkLTlhNmNkYmI0OWU5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA2MSxcbiAgICAgIDEyMSxcbiAgICAgIDE3MixcbiAgICAgIDI0NSxcbiAgICAgIDExMCxcbiAgICAgIDg5LFxuICAgICAgNjMsXG4gICAgICAyMjcsXG4gICAgICAyMDAsXG4gICAgICAxMDMsXG4gICAgICAzOSxcbiAgICAgIDIxOSxcbiAgICAgIDYzLFxuICAgICAgMTg5LFxuICAgICAgODAsXG4gICAgICA3OSxcbiAgICAgIDIzNSxcbiAgICAgIDIzNixcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTU0LFxuICAgICAgMTg2LFxuICAgICAgMjEzLFxuICAgICAgMzcsXG4gICAgICA4NyxcbiAgICAgIDE2LFxuICAgICAgOTksXG4gICAgICA1OSxcbiAgICAgIDkyLFxuICAgICAgMzgsXG4gICAgICAxNjcsXG4gICAgICAyMTQsXG4gICAgICAxMTgsXG4gICAgICAyNixcbiAgICAgIDEyMSxcbiAgICAgIDIzMixcbiAgICAgIDEwOSxcbiAgICAgIDEsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZmdqZW9DRUo3UnFMRUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJFZ0RjUUhoZjN0dUlud2JsVWdwci82YXZEbThIL3FiQnJaTWVjMVdpREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNU1vekR1TFhOWEV3KzRnMjhZTXY4VmhMYnZXNlNwT2RGSUk4cEk1QlIvNXpqdkJuQU5yK3dDUDdJOXVJNGgwY2RuY3BpVGZMcDNkWkNhTWpUR2JRREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTVBd0M1NzV3Q3d2MXFmMnJZdThoQnRyVy9QN2ppYzRFcnFPQ3lzN3FVQjNlRmFGWGpQSDdYZHg3djFteC9SZHJFU3Y2dUdxdUpTM092NEVLUnYxakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NzA1NTQxOTU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJnaG9zdFwiLFxuICAgIFwibGlkXCI6IFwiMTA4NDk0OTAwNTEzMDA6MThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NzA1NTQxOTU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQwMzg5NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBem9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6by5qc29uIjogIntcImtleURhdGFcIjpcIm12Zm9saVBnc1d5MlRjelYza21NQUlXckJFcUUvcTRBZmxFZXRxbFVuLzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzU5Mzk0MzU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBenAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUS0MyVkpSRlAwWmZZaFdtS3Y5dWUxYllEZkcyTmNvTkFYVUtJd3ZndDRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1OTM5NDM1OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0MDMwNzQxNDQ1XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "by kante" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "kante",
  ownername:process.env.OWNER_NAME|| "kante",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
