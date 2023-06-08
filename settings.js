const version = require("@adiwajshing/baileys/package.json").version


global.language = "id"
global.nomerOwner = ["628388024064","6285156137901"]
global.instagram = "https://instagram.com/zyee_ez"
global.email = "takimtod@gmail.com"
global.runWith = "Replit"
global.botName = "Aqua Bot" 
global.sessionName ="session"
global.setmenu ="location" 
global.docType = "docx"
global.public = false
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = `Bot WhatsApp⁰⁵`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = "Aqua Bot"
global.authorName = "@takim._×"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.key = "ReiiXLucifer"
global.token = "13cc2eee-5315-4d84-b3c8-d5b05ce297c3"
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.anonymousImg = "https://telegra.ph/file/1446ae19e40a769e94248.jpg"
global.botImg = "https://telegra.ph/file/67f456acc78d2252dde2f.jpg"
global.fakegifImg ="https://telegra.ph/file/b4ec766d46519110784c3.jpg"
global.quotedImg = "https://telegra.ph/file/037f85737e981c7158d3d.jpg"
global.replyImg = "https://telegra.ph/file/861077ba89491ed8cc6f1.jpg"
global.thumbImg ="https://telegra.ph/file/2b5e7da186256332c9dc8.jpg"
global.thumbnaildokumenImg = "https://telegra.ph/file/67f88bf1209262d81ffe8.jpg"
global.videoMp4 = "https://telegra.ph/file/fcc8a8d9ea62088fb9f4b.mp4"
global.webImg = "https://telegra.ph/file/f7da244c6cbf47f55f59b.jpg"

global.gcounti = {
'prem' : 1000,
'user' : 20
} 


const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






