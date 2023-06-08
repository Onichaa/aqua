const version = require("@adiwajshing/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return `*${botName}*
${week}, ${calender} 

𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 
  *Nama* : ${pushname}
  *Status* : ${isPremium ? 'Premium':'Free'}
  *Saldo* : Rp ${saldo}
  *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
  *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}


𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
  *Nama Bot* : ${botName}
  *Device* : Realme C31
  *Running* : ${runWith}
  *Total Error* : ${db.data.listerror.length}
  *Total User* : ${Object.keys(db.data.users).length}
  *User Banned* : ${db.data.banned.length}
  *Cmd Blocked* : ${db.data.blockcmd.length} 

  ▾
    ${readmore}`}

exports.fitur = (prefix) => {
return`
乂    *𝘔𝘢𝘪𝘯*

 *≻*  .menu
 *≻*  .sewa
 *≻*  .donasi
 *≻*  .owner
 *≻*  .dashboard
 *≻*  .gcbot
 


乂    *𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳*

 *≻*  .play   
 *≻*  .instagram  
 *≻*  .tiktokmusik 
 *≻*  .tiktoknowm
 *≻*  .capcutdl
 *≻*  .capcutmusik
 *≻*  .mediafire 
 *≻*  .gdrive
 *≻*  .zippyshare
 *≻*  .gitclone  
 *≻*  .igstory 
 *≻*  .ytmp4 
 *≻*  .facebook 
 *≻*  .twiterdl 
 *≻*  .ytmp3 
 


乂    *𝘐𝘮𝘢𝘨𝘦 𝘈𝘐* 

 *≻*  .jadianime 
 *≻*  .draw 
 *≻*  .jadizombie
 *≻*  




乂    *𝘙𝘢𝘯𝘥𝘰𝘮* 

 *≻*  .nulis
 *≻*  .ktpmaker
 *≻*  .qc
 *≻*  .qchitam
 *≻*  .ocr
 *≻*  .menfes 628xxxxxxxxxx|nama|pesan 
 *≻*  .ai     
 *≻*  .jarak jakarta|bandung 
 *≻*  .tagme
 *≻*  .tagwa
 *≻*  .qrcode
 *≻*  .apatuh
 *≻*  .resize
 *≻*  .nsfw
 *≻*  .ppcouple
 *≻*  .cecan 
 *≻*  .cogan 
 *≻*  .wallml 
 *≻*  .inspect 
 *≻*  .kalkulator 
 *≻*  .translate  
 *≻*  .volume 
 *≻*  .ss 
 *≻*  .tts
 *≻*  .speed  
 *≻*  .status 
 *≻*  .runtime  
 *≻*  .rules 



乂    *𝘎𝘢𝘮𝘦* 

 *≻*  .susunkata 
 *≻*  .siapaaku
 *≻*  .tekateki
 *≻*  .tebaktebakan 
 *≻*  .tebakkimia
 *≻*  .tebakgambar
 *≻*  .tebaklagu
 *≻*  .family100 
 *≻*  .caklontong 
 *≻*  .tebaklirik 
 *≻*  .tictactoe
 *≻*  .suit
 *≻*   nyerah
 *≻*  .truth
 *≻*  .dare
 



乂    *𝘜𝘴𝘦𝘳* 

 *≻*  .limit 
 *≻*  .claim
 *≻*  .sewa
 *≻*  .buyglimit
 *≻*  .buylimit 
 *≻*  .transfer
 *≻*  .premium 
 *≻*  .profil 
 *≻*  .topbalance



乂    *𝘚𝘵𝘢𝘭𝘬𝘪𝘯𝘨* 

 *≻*  .ffstalk
 *≻*  .mlstalk



乂    *𝘈𝘯𝘰𝘯𝘺𝘮𝘰𝘶𝘴 𝘊𝘩𝘢𝘵* 

 *≻*  .anonymous
 *≻*  .start
 *≻*  .startchat
 *≻*  .keluar
 *≻*  .next
 *≻*  .sendkontak
 *≻*  .invite
 *≻*  .joinchat



乂    *𝘚𝘦𝘢𝘳𝘤𝘩 𝘔𝘦𝘯𝘶* 

 *≻*  .pinterest 
 *≻*  .gimage 
 *≻*  .lirik 
 *≻*  .caridoi
 *≻*  .yts  
 *≻*  .weather 
 *≻*  .kodepos 
 *≻*  .infogempa 


  
乂    *𝘚𝘩𝘰𝘳𝘵 𝘜𝘳𝘭* 

 *≻*  .tinyurl 
 *≻*  .bitly   
 *≻*  .tourl   
 *≻*  .anonfile 



乂    *𝘚𝘵𝘪𝘤𝘬𝘦𝘳* 

 *≻*  .anticolong
 *≻*  .stiktele
 *≻*  .qc
 *≻*  .take 
 *≻*  .sticker
 *≻*  .emojimix 😔+🤣
 *≻*  .smeme 
 *≻*  .triggered 
 *≻*  .ttp 
 *≻*  .attp 
 *≻*  .wasted 
 *≻*  .comrade 
 *≻*  .horny 
 *≻*  .blur 
 *≻*  .pixelate 
 *≻*  .simpcard 
 *≻*  .lolice 
 *≻*  .glass 
 



乂    *𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶* 


 *≻*  .totag
 *≻*  .autosimi
 *≻*  .antilink    
 *≻*  .antilinkgc   
 *≻*  .antivirtex
 *≻*  .antiasing
 *≻*  .welcome on/off
 *≻*  .addkick
 *≻*  .delkick
 *≻*  .listkick
 *≻*  .infogc 
 *≻*  .linkgc 
 *≻*  .setppgc 
 *≻*  .setnamegc 
 *≻*  .setdesc 
 *≻*  .gc open/close 
 *≻*  .revoke 
 *≻*  .hidetag 
 *≻*  .kick  _fitur ini tutup_
 *≻*  .add  _fitur ini tutup_
 *≻*  .opentime 
 *≻*  .closetime 
 *≻*  .demote 
 *≻*  .promote 
 *≻*  .kickme 
 *≻*  .ban 
 *≻*  .unban 
 *≻*  .listban 
 *≻*  .getppgc 
 *≻*  .getpp 
 *≻*  .getidgc 
 *≻*  .listonline 


 
乂    *𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳* 

 *≻*  .toimg 
 *≻*  .tomp3 
 *≻*  .tomp4 
 *≻*  .toptt 
 *≻*  .togif 
 *≻*  .hode 
 *≻*  .ghost 
 *≻*  .nightcore 
 *≻*  .tupai 
 *≻*  .imut 



乂    *𝘙𝘢𝘯𝘥𝘰𝘮 𝘦𝘮𝘰𝘫𝘪*

 *≻*  .emojitw
 *≻*  .emojiwa
 *≻*  .emojimc
 *≻*  .emojism
 *≻*  .emojigo
 *≻*  .emojifb
 *≻*  .emojisk
 *≻*  .emojipi
 *≻*  .emojiom
 *≻*  .emojied
 *≻*  .emojisd
 *≻*  .emojimz
 *≻*  .emojiht
 *≻*  .emojilg
 *≻*  .emojims
 *≻*  .emojidc
 *≻*  .emojiap


  
乂    *Sticker Anime* 
 *≻*  .cry
 *≻*  .kill
 *≻*  .hug
 *≻*  .pat
 *≻*  .lick
 *≻*  .kiss
 *≻*  .bite
 *≻*  .yeet
 *≻*  .neko
 *≻*  .bully
 *≻*  .bonk
 *≻*  .wink
 *≻*  .poke
 *≻*  .nom
 *≻*  .slap
 *≻*  .smile
 *≻*  .wave
 *≻*  .awoo
 *≻*  .blush
 *≻*  .smug
 *≻*  .glomp
 *≻*  .happy
 *≻*  .dance
 *≻*  .cringe
 *≻*  .cuddle
 *≻*  .highfive
 *≻*  .shinobu
 *≻*  .megumin
 *≻*  .handhold



乂   *𝘌𝘱𝘩𝘰𝘵𝘰*

 *≻* glitchtext
 *≻* writetext
 *≻* advancedglow
 *≻* typographytext
 *≻* pixelglitch
 *≻* neonglitch
 *≻* flagtext
 *≻* flag3dtext
 *≻* deletingtext
 *≻* blackpinkstyle
 *≻* glowingtext
 *≻* underwatertext
 *≻* logomaker
 *≻* cartoonstyle
 *≻* papercutstyle
 *≻* watercolortext
 *≻* effectclouds
 *≻* blackpinklogo
 *≻* gradienttext
 *≻* summerbeach
 *≻* luxurygold
 *≻* multicoloredneon
 *≻* sandsummer
 *≻* galaxywallpaper
 *≻* 1917style
 *≻* makingneon
 *≻* royaltext
 *≻* freecreate
 *≻* galaxystyle
 *≻* lighteffects



乂    *𝘗𝘩𝘰𝘵𝘰𝘰𝘹𝘺*

 *≻* shadow
 *≻* write
 *≻* romantic
 *≻* burnpaper
 *≻* smoke
 *≻* narutobanner
 *≻* love
 *≻* undergrass
 *≻* doublelove
 *≻* coffecup
 *≻* underwaterocean
 *≻* smokyneon
 *≻* starstext
 *≻* rainboweffect
 *≻* balloontext
 *≻* metalliceffect
 *≻* embroiderytext
 *≻* flamingtext
 *≻* stonetext
 *≻* writeart
 *≻* summertext
 *≻* wolfmetaltext
 *≻* nature3dtext
 *≻* rosestext
 *≻* naturetypography
 *≻* quotesunder
 *≻* shinetext

   
   
乂    *𝘐𝘮𝘢𝘨𝘦 𝘔𝘢𝘬𝘦𝘳* 

 *≻*  .wanted 
 *≻*  .utatoo
 *≻*  .unsharpen    
 *≻*  .thanos    
 *≻*  .sniper    
 *≻*  .sharpen     
 *≻*  .sepia     
 *≻*  .scary    
 *≻*  .rip    
 *≻*  .redple     
 *≻*  .rejected    
 *≻*  .posterize    
 *≻*  .ps4     
 *≻*  .pixelize    
 *≻*  .missionpassed    
 *≻*  .moustache    
 *≻*  .lookwhatkarenhave   
 *≻*  .jail     
 *≻*  .invert    
 *≻*  .instagram    
 *≻*  .greyscale    
 *≻*  .glitch    
 *≻*  .gay     
 *≻*  .frame    
 *≻*  .fire    
 *≻*  .distort     
 *≻*  .dictator    
 *≻*  .deepfry     
 *≻*  .ddungeon     
 *≻*  .circle     
 *≻*  .challenger    
 *≻*  .burn    
 *≻*  .brazzers    
 *≻*  .beautiful    
 *≻*  .approved     
 *≻*  .3000years    
 *≻*  .candy
 *≻*  .christmas
 *≻*  .3dchristmas
 *≻*  .sparklechristmas
 *≻*  .deepsea
 *≻*  .scifi
 *≻*  .rainbow
 *≻*  .waterpipe
 *≻*  .spooky
 *≻*  .pencil
 *≻*  .circuit
 *≻*  .discovery
 *≻*  .metalic
 *≻*  .fiction
 *≻*  .demon
 *≻*  .transformer
 *≻*  .berry
 *≻*  .thunder
 *≻*  .magma
 *≻*  .3dstone
 *≻*  .neonlight
 *≻*  .glitch
 *≻*  .harrypotter
 *≻*  .brokenglass
 *≻*  .papercut
 *≻*  .watercolor
 *≻*  .multicolor
 *≻*  .neondevil
 *≻*  .underwater
 *≻*  .graffitibike
 *≻*  .snow
 *≻*  .cloud
 *≻*  .honey
 *≻*  .ice
 *≻*  .fruitjuice
 *≻*  .biscuit
 *≻*  .wood
 *≻*  .chocolate
 *≻*  .strawberry
 *≻*  .matrix
 *≻*  .blood
 *≻*  .dropwater
 *≻*  .toxic
 *≻*  .lava
 *≻*  .rock
 *≻*  .bloodglas
 *≻*  .hallowen
 *≻*  .darkgold
 *≻*  .joker
 *≻*  .wicker
 *≻*  .firework
 *≻*  .skeleton
 *≻*  .blackpink
 *≻*  .sand
 *≻*  .glue
 *≻*  .1917
 *≻*  .leaves



乂    *𝘚𝘦𝘵𝘵𝘪𝘯𝘨 𝘉𝘰𝘵* 

 *≻*  .setprefix 
 *≻*  .setthumb 
 *≻*  .setppbot    
 *≻*  .setreply 
 *≻*  .setbio 
 *≻*  .setgif         
 *≻*  .setimgquoted    



乂    *𝘚𝘵𝘰𝘳𝘢𝘨𝘦*     
 *≻*  .addstik
 *≻*  .delstik  
 *≻*  .liststik  
 *≻*  .addvn    
 *≻*  .delvn 
 *≻*  .listvn 
 *≻*  .adderror     
 *≻*  .clearallerror    
 *≻*  .listerror




乂    *𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦* 
 *≻*  .addsewa
 *≻*  .ceksewa
 *≻*  .addowner
 *≻*  .addcmdowner
 *≻*  .addcmdlimit
 *≻*  .addcmdprem
 *≻*  .listowner
 *≻*  .listcmdowner
 *≻*  .listcmdlimit
 *≻*  .listcmdprem
 *≻*  .clearallerror
 *≻*  .clearalluser
 *≻*  .clearallban
 *≻*  .clearallblock

 
  
乂    *𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶* 

 *≻*  .unbanwa
 *≻*  .filetozip
 *≻*  .banchat 
 *≻*  .unbanchat 
 *≻*  .chat 
 *≻*  .join 
 *≻*  .bc 
 *≻*  .bcgc 
 *≻*  .react 
 *≻*  .block 
 *≻*  .unblock 
 *≻*  .getcase 
 *≻*  .getfile 
 *≻*  .listpc 
 *≻*  .listgc 
 *≻*  .> / x / c / evalcode
 *≻*  .=> / evalcode2
 *≻*  .$ / executor


  
 
乂    *𝘛𝘩𝘢𝘯𝘬𝘴 𝘵𝘰* 
 • Irfan Hariyanto
 • Dittaz
 • Takim
 • Nina Kawai
 • Resta Gamteng :v
 • Zeeone Ofc
 • Yudha Perdana
 • Yogi PW
 • Decode Denpa
 • Fernazer
 • X - Dev Team
 • XChillDs & Yuzu
 • Dika Ardnt
 
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
