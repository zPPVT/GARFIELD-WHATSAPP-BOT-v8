/*COPYRIGHT (C) 2022 CODED BY NOIZE */
// Set this up the way you want it
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', //Do not change
}

global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',  // Do not change
}
global.owner = ["+18608640387"] //👈  Enter Your number)
global.premium = ["+18608640387"] // 👈  Enter Your number)
global.emoji01 = ["👽"] // 👈 Enter your Emoji 
global.emoji02 = ["👽"] //👈 Enter your Emoji
global.ownernomer = [+18608640387] //👈 Enter Your number
global.ownername = ["Ahmed"] //👈 Enter Your name
global.botname = ["AHMED LAFI BOT"] //👈 Enter Your Bot name
global.footer = ["AHMED"] //👈 Enter Your Name
global.ig = ["https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"]
global.region = ["Saudi Arabia"] // 👈 Enter Your country
global.sc = ["https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"]
global.myweb = ["https://www.facebook.com/garfieldbots/"] // 👈 Enter your Social media link to follow now button
global.packname = ["Ahmed bot"]  // 👈 You Can change this your choice 
global.author = ["Ahmed DEVELOPMENT"] // 👈 You Can change this your choice 
global.sessionName = 'Ahmed'  // 👈 You Can change this your choice 
global.prefa = ['','!','.']  // 👈 You Can change this your choice 
global.sp = ['Ahmed']  // 👈 You Can change this your choice 
global.mess = {
    success: [*تم 👽*], //👈 Use these in your language of choice
    admin: [*أمر للآدمن مالك دخل فيه!*], // 👈 Use these in your language of choice
    botAdmin: [*عط البوت اشراف عشان يشتغل الأمر !*], // 👈 Use these in your language of choice
    owner: [*هذا الامر للمالك!*], // 👈 Use these in your language of choice
    group: [*هذا الامر للقروبات فقط!*], //👈 Use these in your language of choice
    private: ["*هذا الامر بالخاص فقط!*], // 👈 Use these in your language of choice
    bot: [*هذا الامر للبوت فقط*], //👈 Use these in your language of choice
    wait: [*```انتظر قليلًا 🐼```*], // 👈 Use these in your language of choice
    error: ["خطأ! ممكن المالك ماله خلق يعدله 👽!"], // 👈 Use these in your language of choice
    endLimit: ["Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours"],
}
    global.limitawal = { 
    premium: "Infinity",
    free: "infinity",
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}  
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flaming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.fluming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flarun = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flasmurf = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here

// Do not change 👇 

global.limitAwal =  "99999999999999999",  //Do not Change 🚫
global.lolkey =  "835641f3d2d1b6971e1fd132", //Do not Change 🚫
global.xteam =  "apivproject", //Do not Change 🚫
global.xcodeapi =  "5S3epf7hC2", //Do not Change 🚫
global.dapaapi =  "piceg", //Do not Change 🚫
global.sankey =  "sanuwa", //Do not Change 🚫
global.xteamkey =  "nandowangy", //Do not Change 🚫
global.carkey =  "cakrayp24Q6", //Do not Change 🚫
global.violkey =  "beta", //Do not Change 🚫
global.HunterApi =  "FuckBitch", //Do not Change 🚫
global.neokey =  "V8qnSaTq", //Do not Change 🚫
global.riy =  "RiyGanz" //Do not Change 🚫

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
