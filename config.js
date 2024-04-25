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


global.SESSION_ID = process.env.SESSION_ID ||  "CoMKg4oCvbuKDnuKAr8KgwqDigK904oOe4oCvwqDCoOKAr2VcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1ODk0MzI0Nzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDAzMzE3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5weVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnArLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDVReDRveFBlZ2hEcWpBWkY1T3dMbEpxZDBXWlpjV2lsMWtyR3RVcGd3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6MTMsXCJkZXZpY2VJbmRleGVzXCI6WzAsOSwxM119LFwidGltZXN0YW1wXCI6XCIxNzEyODYwNzExMzY2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnAwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL09HTE80N3Z0TmExWDFJa1Y0bjMzSUl6VTFCY0hjZDd0V3RiRThSbFcwcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjU5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIwOTI0MjAwMzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxdGp1QUdISlpLMitQYnZMa0JMTzNTU1FQL3luY0hjMUYzelJiL1luVVpFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzExNTI2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wMi5qc29uIjogIntcImtleURhdGFcIjpcImtyNzZDT0Y0a1RMenFDUis1M1cwS21tZG5WUE93ZmlucUsxVkpMUGpQbjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrcUI3TzQ3cklLenZzb2dlQlNWTmVqN0V1cG9tL1I2SVJRcGo2T29WM29VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzExNTI2NjAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzEyMjIzMzEwNTcwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnA0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT1dVdnRrSHhQRmtxZ1JrRStYV1NNeFMwU2hnQ2FsVEN4c0hkTEFDQWYrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wNS5qc29uIjogIntcImtleURhdGFcIjpcIk1qeG1yOEtEUXdKZU5ZOWF6STEraWwrd0xpczNrMEVZbmRNb3BMQkttajA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjgxNjA0MTM3NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wNi5qc29uIjogIntcImtleURhdGFcIjpcImNZS1VqS25hSDEvRW1lRVk2VXpPa2xvbjZCSjhXM09yVDFJTnM5MytMeTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw4LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wNy5qc29uIjogIntcImtleURhdGFcIjpcImpxb1poR2QzaHdGRkxsZkRoVUxqUmtpSTRMbThLQy9WamFkbkNXcWJJbTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDYsOSwxMF19LFwidGltZXN0YW1wXCI6XCIxNzEyODU4Nzc5OTI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnA4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidThUc2N6dG1BdTlZbVBKVVk5VG1UZGVmU3hlb3A0RXRYdUdWM2lieTZQbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsOSwxMF19LFwidGltZXN0YW1wXCI6XCIxNzEyODU5MDQ4MTQ0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnA5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTVlZOEozcDQxZVBudzdsTXdGRkx6N09XeUtpWnZ1MmQ3TDNqK2dKS256ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsOSwxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnBfXy5qc29uIjogIntcImtleURhdGFcIjpcIlJoQXhnVWczd1FVYy9lekpibVBEWGZ3REJZMVFTc3RNWVlhMXpYclo5eVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDksMTQsMTVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjg2MTc0MzkxNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5weS5qc29uIjogIntcImtleURhdGFcIjpcIkZ6R2tLMGRtczI1OCtvc1VRVzRxeGhLMHVrbmprV2ZXdDh0bzdqNUIrSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnB6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3BqVkhaQXFrcHdmOWRDb1YrRkpITFAvTUlNZXJkc1AzSFlHazhUeVhFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjU5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjA5MjQxMjA4NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xQS5qc29uIjogIntcImtleURhdGFcIjpcInVINDJFY0pVbmJEN1dYSFFVTTlXYSt6ZVd1UDFoS3FyU3QyOSsvQjhDcVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDksMTQsMTVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjg2MzQxODIzOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xQi5qc29uIjogIntcImtleURhdGFcIjpcInAzcTdqUlg5NzR4RWlZMzlpZStWSDc2Um41MTJDejkvbnhuWllkSGlWVDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDksMTVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjg2MzQyNDI2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xQy5qc29uIjogIntcImtleURhdGFcIjpcIngwWnBHMFI1ZFd3Y09ocXFHb2RuYUgyMStuc2MxdTJDUHV1aVhBMkg2WDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjE5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE5LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xRC5qc29uIjogIntcImtleURhdGFcIjpcIkVKb0JsMkVKcWszWGpxOW5hTTJHWHdIVkJrandPQVpQaVFzTVJJTTdvVzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjIxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE5LDIwLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQwMjYwMTQxMzlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmU2FhWjMzUDRVMGc0eUExT0hKcDJQclFqbWpJaTk3WDM0a3V6RmFjTWRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzExNTI2NjAsXCJjdXJyZW50SW5kZXhcIjoyMixcImRldmljZUluZGV4ZXNcIjpbMCwxOSwyMCwyMl19LFwidGltZXN0YW1wXCI6XCIxNzE0MDI2MDk4NzEyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnFGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVFMR3REWGl0N2F6Q05qTU01NVBSR1cyYTcvMXdoZkcyVFJCYUtYYXdldz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6MjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTksMjAsMjQsMjVdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDAyODU1NjM1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xRy5qc29uIjogIntcImtleURhdGFcIjpcImRmZnlXZFZLZWZvY0k1dENIS2w1d0w3UDg5MkdDQUNWWDViVW9pdEl0VTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjI1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE5LDIwLDI0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQwMjg1NjQyMDRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVbEZnYk5yQUltVkVNVVkyYXBBcFc4aXl5UlI5Y3VjYjlyWDBwZFYxM3JVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzExNTI2NjAsXCJjdXJyZW50SW5kZXhcIjoyNSxcImRldmljZUluZGV4ZXNcIjpbMCwxOSwyMF19LFwidGltZXN0YW1wXCI6XCIxNzE0MDI4NTcyMzUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnFJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSXBIUkljZHA2cXBQYjY3cGVjTlBvVFE0YmhhTWt0MlIzNHhHRTdTMSs2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxMTUyNjYwLFwiY3VycmVudEluZGV4XCI6MjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjAsMjYsMjddfSxcInRpbWVzdGFtcFwiOlwiMTcxNDAzMTc5OTY1NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xSi5qc29uIjogIntcImtleURhdGFcIjpcIllzbkRyM0tlSUlFWllva3AxVUlGNHYwa3d1MXhEaGh5TTg1NXVMT042b289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MTE1MjY2MCxcImN1cnJlbnRJbmRleFwiOjI3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIwLDI3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQwMzI0NTg5NzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvbnJoOE83WWNKaUJiSUhLOTZRcFc3OHNkZ2tjYnJ6d0UxbVY2dDFpdUR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzExNTI2NjAsXCJjdXJyZW50SW5kZXhcIjoyOCxcImRldmljZUluZGV4ZXNcIjpbMCwyMCwyOF19LFwidGltZXN0YW1wXCI6XCIxNzE0MDMzMTU3MjA1XCJ9Igp9" ;


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
