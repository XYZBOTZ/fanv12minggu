// INI SC MASIH ADA BUG YA FIX IN AJA
// BASE ILMANHDYT
// SC ORI HYZER
// CREATOR KRIZYN OFC
// RECODE BY RIEL OFC

//=============『 Utama 』================== //
global.owner = ['6285862754807'] 
global.mods = ['6285862754807'] 
global.prems = ['6285862754807'] 

//=============『 Info Owner 』============== //
global.nameowner = 'Nopan'
global.numberowner = '6285862754807'
global.instagram = '-'
global.github = 'https://github.com/XYZBOTZ'
global.dana = '085862754807'
global.pulsa = '085862754807'
global.gopay = '085862754807'

//=============『 Info Bot 』=================//
global.namebot = 'Xyz||Md'
global.gc = 'https://chat.whatsapp.com/ElBB5NrJS637TYqjJLHuk2'
global.web = 'https://chat.whatsapp.com/ElBB5NrJS637TYqjJLHuk2' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.webm = 'https://chat.whatsapp.com/ElBB5NrJS637TYqjJLHuk2'
global.price1 = '-'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://i.postimg.cc/tgw3XyXK/IMG-20220630-193744.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://i.postimg.cc/tgw3XyXK/IMG-20220630-193744.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '↻Xyz||Md'
global.watermark = wm
global.wm2 = 'ᯤ 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙱𝚈 Nopan×፝֟͜×'
global.wm3 = 'ᯤ XYZ-MD'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://i.postimg.cc/tgw3XyXK/IMG-20220630-193744.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '⏳Tunggu Sedang Proses...'
global.eror = '_*🚨 Server Bot Sedang Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '⏳ Stiker sedang Proses'
global.packname = 'Sticker By'
global.author = 'Xyz-Md✵'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
