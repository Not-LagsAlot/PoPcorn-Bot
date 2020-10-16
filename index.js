const Discord = require('discord.js');

const client = new Discord.Client({
  disableMentions: "everyone",
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://LagsAlot:q8r3hm2g@cluster0.z27sf.mongodb.net/test")

const Poll_Emoji_2 = "👎";
const Poll_Emoji_1 = "👍";

var changes = 'Added custom commands';
var info = '`avatar`, `ping`, `whois [user]`, `botinfo`, `serverinfo`, `support`, `serverinfo`, `partners`, `timer`, `covid`, `invite`, `uptime`, `afk`';
var mod = '`ban`, `kick`, `warn`, `purge`, `slowmode`, `mute`, `unmute`, `prefix`'
var fun = '`meme`, `reverse`, `hug`, `penis`, `emojify`, `clyde`, `8ball`, `kill`, `rps`  `trivia`, `slap`, `youtube`, `simp`, `spoiler`, `spotify`, `love`, `hack`, `code`, `panda-fact`';
var giveaways = '`giveaway (time here) (channel here) (prize here)`'
const ccplease = `cc-create`

const prefix = '.'
const Artificial = '`chat`'

var version = 'v5.0';
const { badwords } = require("./swear.json") 
const ms = require("ms");
const usedCommand = new Set();
const pbl = `[Join the server](https://discord.gg/RfaWpnV)\n[Website](https://paradisebots.net/)`

const Timers = new Map();
const configs = require('./logs.json')
const custom = require("./custom")
const fetch = require('node-fetch')

const moment = require("moment");


client.snipes = new Discord.Collection();
var report = '**Command:** ban\n**Expected:** Give me a prompt\n**Error:** Didn\'t give me the prompt';







const EmbedColor = "RANDOM";

const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});





client.once('ready', () => {
  client.user.setActivity(`people type .help in ${client.guilds.cache.size} servers`, { type: 'WATCHING' })
    console.log(`Bot is online | used in server LOL`);
    if (client.channels.fetch('763971750936838155')) {
      client.channels.fetch('763971750936838155').then(channelsss => {
    const nowonline = new Discord.MessageEmbed()
    .setDescription(`Now logged in as \`${client.user.tag}\``)
    .setColor(0x879ffa)
    channelsss.send(nowonline)
    

      })
    
    }
})
client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if(oldMessage.author.bot) return
  const something = `<#${oldMessage.channel.id}>`
  try {
    let updated = new Discord.MessageEmbed()
      .setTitle(`Message Edited`)
      .setColor(`GREEN`)
      .addField(`Member`, oldMessage.author.tag, true)
      .addField(`Channel`, something)
      .addField(`Old Message`, oldMessage.content, true)
      .addField(`New Message`, newMessage.content, true);
    let channel = oldMessage.guild.channels.cache.find(
      (ch) => ch.name === "message-logs"
    );
    if (!channel) return;
    channel.send(updated);
  } catch (e) {}  (oldMessage, newMessage);
});
client.on("messageDelete", async (message) => {
  if(message.author.bot) return
  if (message.partial) await message.fetch();
  const content = message.content
  const ind = `<#${message.channel.id}>`
  const by = message.author.tag
  const deleted = new Discord.MessageEmbed()
  .setTitle("Message Deleted")
  .addField('Member', by )
  .addField('Channel', ind)
  .addField('Message Content', content)
  .setTimestamp()
  .setColor('RED')
  let deletedin = message.guild.channels.cache.find(
    (ch) => ch.name === "message-logs"
  );
  if (!deletedin) return;
  deletedin.send(deleted);
  (message);
});
client.on('message', async message => {

 
  
  

if(message.author.bot){
  return
}



if(message.content.includes(`${client.user.id}`)) {
  const somerandomshithere = new Discord.MessageEmbed()
  .setTitle('Some important stuff')
  .setDescription(`1. Bot's prefix is \`${prefix}\`\n2. Bot's main command is \`.help\`\n3. You can join the support server by clicking [here](https://discord.gg/MJHfQ54)`)
  message.reply(somerandomshithere)
  }


  if (!message.content.startsWith(prefix)) return;

 ;

  if(!message.guild){
    return
  }

  

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();





  
  

  if (command === 'ping') {
  message.channel.send('Pinging...').then(message =>{
    message.edit(`**Pong!** \`${Math.round(client.ws.ping)}ms\``)
  })

  } else if (command === 'help') {

    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {

    const help = new Discord.MessageEmbed()
    
      .addField('Utility', info)
      .addField('Moderation', mod)
      .addField('Fun', fun)
      .addField('Custom Commands', ccplease)
      .addField('Artificial Intelligence', Artificial)
      .addField('GiveAway', giveaways)
      
   
      .setColor('RANDOM')
   message.channel.send(help)
    
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }


  
      
  } else if (command === 'commands') {
    const commands = new Discord.MessageEmbed()
      .setTitle('oopsie')
      .setFooter('Oh it looks like this command has been **MOVED**, please do .help and try again!')


    message.channel.send(commands);
  } else if (command === 'warn') {
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send('<a:aBF_CheckNo:747070419668041788> You do **NOT** have the correct permissions to run this command')
          }
         const userwarn = message.mentions.members.first()
      
         if(!userwarn){
           return message.channel.send('<a:aBF_CheckNo:747070419668041788> Please state a user <a:aBF_CheckNo:747070419668041788>')
           }
      
           if(message.mentions.users.first().bot) {
            return message.channel.send("Hey! thats a **bot** back off from my kind you human!")
          }
      
           const reasonss =  args.slice(1).join(" ")
      
           if(!reasonss){
             return message.channel.send('<a:aBF_CheckNo:747070419668041788> Please give a reason <a:aBF_CheckNo:747070419668041788>')
           }
      
           message.channel.send(`**${userwarn}** has been warned`)
      
           userwarn.send(`You were warned in ${message.guild.name} by ${message.author.tag}\nReason: \`${reasonss}\``);
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    

    } else if (command === 'support') {

    message.channel.send('Join **PoPcorn Support** server here: https://discord.gg/MJHfQ54 ');
  } else if (command === 'info') {
    const info = new Discord.MessageEmbed()
      .setTitle('Info')
      .setFooter('PoPcorn bot is a discord bot made by LagsAlot#0001, this bot has many features (fun and moderation)')

    message.channel.send(info);
  } else if (command === 'purge') {
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
    return message.channel.send(
        `You do not have correct permissions to do this action, ${message.author.username}` // returns this message to user with no perms
    );
if (!args[0]) {
    return message.channel.send(`Please enter a amount 1 to 100`)
}

let deleteAmount;

if (parseInt(args[0]) > 100 ) {
    message.channel.send('Error: Number can\'t be more then 100')
} else {
    deleteAmount = parseInt(args[0]);
}

await message.channel.bulkDelete(deleteAmount, true);

const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Successfully deleted ${deleteAmount} message(s)`)
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setColor('#f2f2f2')
await message.channel.send(embed)
    
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    

  }else if(command === 'spank'){
   const spanked = message.mentions.members.first()

   if(!spanked){
     return message.channel.send('Hey! please mention a user')
   }
   const spankedd = new Discord.MessageEmbed()
   .setDescription(`${message.author.tag} spanked ${spanked}`)
   .setImage('https://tenor.com/view/spank-tomandjerry-gif-5196956')
   .setColor('RANDOM')
   message.channel.send(spankedd);
  }else if(command === 'slap'){
    const member = message.mentions.members.first();

    if(!member){
      return message.channel.send('Who are you gonna slap?')
    }
    if(!member.id === message.author.id){
      return message.channel.send('BRUH you cant slap yourself')
    }

   
const slapped = new Discord.MessageEmbed()
.setDescription(`${message.author.tag} slapped ${member}`)
.setImage('https://tenor.com/view/spank-tomandjerry-gif-5196956')
  .setColor('RANDOM')
  message.channel.send(slapped);

  }else if(command === 'roast'){
    message.channel.send('Your so ugly that when you went to an ugly looking contest they rejected you as they didn\'t want professionals');

  }else if(command === 'botinfo'){
    let user = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())

      .setTitle("Botinfo!")
      .addField("Username:", client.user.username)
      .addField("Tag:", `**${client.user.discriminator}**`)
      .addField("ID:", client.user.id)
      .addField("Owner:", `LagsAlot#0001`)
      .addField("Channel's:", `${client.channels.cache.size}`)
      .addField("Server's using the bot:", `${client.guilds.cache.size}`)
      .addField("users's know PoPcorn:", `${client.users.cache.size}`)
      .addField("Created:", client.user.createdAt)
      .setFooter(
        message.member.user.username.toUpperCase(),
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();

    message.channel.send(user);

  }else if(command === 'serverinfo'){
    let icon = message.guild.iconURL({size: 2048}); // Server Avatar
    
    let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "london": "London",
      "russia": "Russia",
      "japan": "Japan",
      "hongkong": "Hongkong",
      "sydney": "Sydney",
      "us-central": "U.S. Central",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "india": "India",
      "europe": "Europe"
    }
    
    // Members
    let memberss = message.guild.members;
    let offline = memberss.cache.filter(m => m.user.presence.status === "offline").size,
        online = memberss.cache.filter(m => m.user.presence.status === "online").size,
        idle = memberss.cache.filter(m => m.user.presence.status === "idle").size,
        dnd = memberss.cache.filter(m => m.user.presence.status === "dnd").size,
        robot = memberss.cache.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter(r => r.type === "text").size,
        vc = channels.cache.filter(r => r.type === "voice").size,
        category = channels.cache.filter(r => r.type === "category").size,
        totalchan = channels.cache.size;
       
    
    // Region
    let location = region[message.guild.region];
    
    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = message.guild.createdAt // Install "dateformat" first.
    
    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Region", location)
    .addField("Date Created", `${created}`)
    .addField("Owner", `**${message.guild.owner.user.tag}** \n\`${message.guild.owner.user.id}\``)
    .addField(`Members [${total}]`, `<:Online:751334258592710757>: ${online} \n<:idle:752069859130736750>: ${idle} \n<:DND:751334386842206208>: ${dnd} \n<:Offline:751334314343530538>: ${offline} \n🤖: ${robot}`)
    .addField(`Channels [${totalchan}]`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
    message.channel.send(embed); // Let's see if it's working!;

  }else if(command === 'ban'){
    
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {


    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Error:** as you do not have `BAN MEMBERS` permission you can\'t use this');
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('**Error:** I cannot ban as I do not have`BAN MEMBERS` permission ');
  
    const successfullybanned = message.mentions.members.first() 
  
    if (!successfullybanned) return message.reply('Please mention a user');
    if(successfullybanned.hasPermission('BAN_MEMBERS')){
      const banneds = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(banneds);
    }
    if(successfullybanned.hasPermission('KICK_MEMBERS')){
      const bannedss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedss);
    }
    if(successfullybanned.hasPermission('ADMINISTRATOR')){
      const bannedsss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedsss);
    }
    if(successfullybanned.hasPermission('MANAGE_CHANNELS')){
      const bannedssss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedssss);
    }
    if(successfullybanned.hasPermission('MANAGE_ROLES')){
      const bannedsssss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedsssss);
    }
    if(successfullybanned.hasPermission('MANAGE_MESSAGES')){
      const bannedssssss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedssssss);
    }
    if(successfullybanned.hasPermission('MANAGE_GUILD')){
      const bannedsssssss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedsssssss);
    }
    if(!successfullybanned.bannable){
      const bannedssssssss = new Discord.MessageEmbed()
      .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot ban a moderator/administrator')
      .setColor('RANDOM')
      return message.reply(bannedssssssss);
    }
    let reason = args.slice(1).join(' ');
    if (!reason) reason = `No reason provided`;
  
    successfullybanned.ban(reason)
  
    let kickedf= new Discord.MessageEmbed()
        .setDescription(`***Successfully banned ${successfullybanned} (\`${successfullybanned.id}\`) ***`)
        .setColor(0x15daea)
        .setFooter(`banned by ${message.author.tag}`)
        message.channel.send(kickedf);
  
  
 
      
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    
    
    
}else if(command === 'kick'){
  
  if(usedCommand.has(message.author.id)){
    message.reply('You cannot use the command beacuse of the cooldown.')
} else {

  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**Error:** you don\t have `KICK MEMBERS` permission');
  if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('**Error:** I don\'t have `KICK MEMBERS` permission');

  const memberssssss = message.mentions.members.first() 

  if (!memberssssss) return message.reply('Please mention a user');
  if(memberssssss.hasPermission('BAN_MEMBERS')){
    const bannedss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedss);
  }
  if(memberssssss.hasPermission('KICK_MEMBERS')){
    const bannedsss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedsss);
  }
  if(memberssssss.hasPermission('ADMINISTRATOR')){
    const bannedssss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedssss);
  }
  if(memberssssss.hasPermission('MANAGE_CHANNELS')){
    const bannedsssss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedsssss);
  }
  if(memberssssss.hasPermission('MANAGE_ROLES')){
    const bannedssssss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedssssss);
  }
  if(memberssssss.hasPermission('MANAGE_MESSAGES')){
    const bannedsssssss = new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedsssssss);
  }
  if(memberssssss.hasPermission('MANAGE_GUILD')){
    const bannedssssssss= new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> You cannot kick a moderator/administrator')
    .setColor('RANDOM')
    return message.reply(bannedssssssss);
  }
  
  if(!memberssssss.kickable){
    const bannedsssssssss= new Discord.MessageEmbed()
    .setDescription('<a:aBF_CheckNo:747070419668041788> Due to `Role Hierarchy` I am unable to ban that user')
    .setColor('RANDOM')
    return message.reply(bannedsssssssss);
  }

  let reason = args.slice(1).join(' ');
  if (!reason) reason = `No reason provided`;

  memberssssss.kick(reason)

  let kickedf = new Discord.MessageEmbed()
      .setDescription(`***Successfully kicked ${memberssssss} (\`${memberssssss.id}\`) ***`)
      .setColor(0x15daea)
      .setFooter(`kicked by ${message.author.tag}`)
      message.channel.send(kickedf);


    
    
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}
  
  
  
}else if(command === 'avatar'){

  if(usedCommand.has(message.author.id)){
    message.reply('You cannot use the command beacuse of the cooldown.')
} else {

  let user = message.author || message.mentions.users.first();

  let embed = new Discord.MessageEmbed()
  .setTitle(`${user.username}'s Avatar!`)
  .setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
  .setColor("RANDOM")
  message.channel.send(embed);
   
    
    
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}
  
}else if(command === 'reverse'){

  if(usedCommand.has(message.author.id)){
    message.reply('You cannot use the command beacuse of the cooldown.')
} else {

  if (!args[0]) { 
		return message.channel.send(`Please Give Me Text!`) 
       } else {
        const embed = new Discord.MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setDescription(args.join(' ').split('').reverse().join(''))
		  message.channel.send(embed)};

      await message.delete();
  
    
    
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}
  
    }else if(command === 'poll'){
      if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    } else {
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Poll Information!")
      .setDescription(
        `${prefix}Poll <Message> To Create A Simple Yes Or No Poll!`
      )
      .setFooter(`Command Requested By ${message.author.username}`)
      .setTimestamp();

    if (args.length === 0) {
      return message.channel.send(Embed);
    }

    let Message = args.slice(0).join(" ");

    let Poll = await message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`${EmbedColor}`)
        .setTitle(`${Message}`)
        .setFooter(`Poll Created By ${message.author.username}`)
        .setTimestamp()
    );

    await Poll.react(`${Poll_Emoji_1}`);
    await Poll.react(`${Poll_Emoji_2}`);
    await message.delete();
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
      
       }else if(command === 'hug'){
         
        var member= message.mentions.members.first();
        var images = ["https://media0.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif?cid=ecf05e47a04f6d3c6d7f959b6b190b1cda88ce59d34605ac&rid=giphy.gif", "https://media2.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif?cid=ecf05e477106e2fc0d1ed0906595b65067262ab482a12b5d&rid=giphy.gif", "https://media3.giphy.com/media/u9BxQbM5bxvwY/giphy.gif?cid=ecf05e4761cb7e6abcb1ce7cd71e633f635d55fb953813bb&rid=giphy.gif", "https://media1.giphy.com/media/ZQN9jsRWp1M76/giphy.gif?cid=ecf05e476aa1056a2b1672677a82b9415bb06e0a8925f15a&rid=giphy.gif", "https://media2.giphy.com/media/IRUb7GTCaPU8E/giphy.gif?cid=ecf05e4791de990a3943c06a4dd525151df03fc7667807a5&rid=giphy.gif", "https://media0.giphy.com/media/BXrwTdoho6hkQ/giphy.gif?cid=ecf05e4783c7a876015ea9dd1be3b1cfeb7d9af9183e1f97&rid=giphy.gif" ];
        var image = Math.floor(Math.random() * images.length);
        if(!member) return message.channel.send("you need to mention someone")
        let HugEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} you can't hug yourself but come here I'll hug you`)
          .setImage(String([images[image]]))
          .setColor(0xF000FF)
            if(member.id === message.author.id) return message.channel.send(HugEmbed);
         let HugEmbed2 = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} hugs ${member.user.username}, how cute`)
          .setImage(String([images[image]]))
          .setColor(0xF000FF)
         return message.channel.send(HugEmbed2);
        }else if(command === 'meme'){
          if(usedCommand.has(message.author.id)){
            message.reply('You cannot use the command beacuse of the cooldown.')
        } else {
          var num = Math.floor(Math.random() * (500 - 1) + 1)

          message.channel.send(`https://ctk-api.herokuapp.com/meme/${num}`);
           
            
            
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
         
        }else if(command === 'whois'){
          if(usedCommand.has(message.author.id)){
            message.reply('You cannot use the command beacuse of the cooldown.')
        } else {
          let user = message.mentions.users.first() || message.author;
    
          if (user.presence.status === "dnd") user.presence.status = "<:DND:751334386842206208> | Do Not Disturb";
          if (user.presence.status === "idle") user.presence.status = "<:idle:752069859130736750> | Idle";
          if (user.presence.status === "offline") user.presence.status = "<:Offline:751334314343530538> | Offline";
          if (user.presence.status === "online") user.presence.status = "<:Online:751334258592710757> | Online";
          
          function game() {
            let game;
            if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
            else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
            return game; // Return the result.
          }
          
          let x = Date.now() - user.createdAt; // Since the user created their account.
          let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
          let created = Math.floor(x / 86400000); // 5 digits-zero.
          let joined = Math.floor(y / 86400000);
          
          const members = message.guild.member(user);
          let nickname = members.nickname !== undefined && members.nickname !== null ? members.nickname : "None";
          let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
          let joindate = moment.utc(members.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Joined the Server Date
          let status = user.presence.status;
          let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
          
          const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, avatar)
          .setThumbnail(avatar)
          .setTimestamp()
          .setColor(0x7289DA)
          .addField("ID", user.id, true)
          .addField("Nickname", nickname, true)
          .addField("Created Account Date", `${createdate} \nsince ${created} day(s) ago`, true)
          .addField("Joined Guild Date", `${joindate} \nsince ${joined} day(s) ago`, true)
          .addField("Status", status, true)
          .addField("Game", game(), true)
          
          message.channel.send(embed); // Let's see if it's working.
            
            
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
          
        
        }else if(command === 'new'){
  const updates = new Discord.MessageEmbed()
  .setTitle('Whats new!')
  .addField('Current version', version)
  .addField('Changes To The Bot', changes)
  .setFooter(`PoPcorn Bot | Made by LagsAlot#0001`)
  .setColor('RANDOM')
  .setTimestamp(Date.now())

  message.channel.send(updates);
}else if(command === 'restart'){
      const OWNER_ID  = '642308656217456641'; 
  
      if (message.author.id === OWNER_ID) {
          message.channel.send(`Ok, ${message.author}, I'll restart <a:aBF_ColorsLoad:747063061399208069>`);
          message.channel.send(`Shutting down port...`)
          setTimeout(() => {
              process.exit(0);
          }, 5000);
      } else {
          return message.channel.send("You are not able to force the bot to restart.");
      }



  }else if(command === 'penis'){

    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {

    var facts = [
      "",
      "=",
      "==",
      "===",
      "====",
      "=====",
      "======",
      "=======",
      "========",
      "=========",
      "==========",
      "===========",
      "============",
      "=============",
      "==============" //little pyramid tho
    ];
    var fact = Math.floor(Math.random() * facts.length);
    let ppuser = message.mentions.users.first() || message.member.user;
    const peniss = new Discord.MessageEmbed()
    .setTitle("Penis Generator")
      .setDescription(`${ppuser.username}'s penis 
  8${facts[fact]}D`)
  .setColor('RANDOM');
  
    message.channel.send(peniss);
    
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    
    
}else if(command === 'clyde'){

  if(usedCommand.has(message.author.id)){
    message.reply('You cannot use the command beacuse of the cooldown.')
} else {

  if (!args[0]) return message.channel.send('What do you want clyde to say?');
let clydeMessage = args.slice(0).join(' ');
let encodedLink = encodeURI(`https://ctk-api.herokuapp.com/clyde/${clydeMessage}`);

const clydeembed = new Discord.MessageEmbed()
.setImage(encodedLink)
.setColor('RANDOM')

message.channel.send(clydeembed)
   
    
    
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}
  
  



}else if(command === 'emojify'){if(args.length < 1) {
  message.channel.send('You must provide some text to emojify!');
 }

message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(''));
}else if(command === 'softban'){message.delete()

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to perform this command!")
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have permission to perform this command")
  
     let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
     if(!banMember) return message.channel.send("Please provide a user to ban!")
  
     let reason = args.slice(1).join(" ");
     if(!reason) reason = "No reason given!"
  
     
  
     banMember.send({embed: {color: "#ff0019", description:`Hello, you have been banned from ${message.guild.name} for: ${reason}`}}).then(() =>
     message.guild.member(banMember).ban(banMember, { days: 1, reason: reason})).then(() => message.guild.members.unban(banMember.id).catch(err => console.log(err)));
  
     
  
     
       
  
          message.channel.send({embed: {color: "#10de47", description: `<a:tick:724636137653534720> ${banMember.user.username} has successfully been soft banned from the server.`}});message.delete();

          
        
  }else if(command === 'slowmode'){
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {

    if(!message.member.hasPermission(['MANAGE_CHANNELS'])){
      return message.channel.send('You dont have the permission to run this command')
    }
    if(!args[0]){
      return message.channel.send('Please mention the time of the slowmode')
    }

    if(isNaN(args[0])){
      return message.channel.send('That is not a number!')
    }
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Set the slowmode of this channel to **${args[0]}**, slowmode set by **${message.author.username}**`)
      
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    
  }else if(command === '8ball'){
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {
    if (!args[2]) {
      return message.channel.send('Please ask a full questions.')
  }
  let number = Math.floor(Math.random() * 8);
  if (number == 0) {
      return message.channel.send('Yes, definitely so.')
  }
  if (number == 1) {
      return message.channel.send('No, definitely not.')
  }
  if (number == 2) {
      return message.channel.send('Ask again later.')
  }
  if (number == 3) {
      return message.channel.send('It is uncertain.')
  }
  if (number == 4) {
      return message.channel.send('Odds are not in your favor.')
  }
  if (number == 5) {
      return message.channel.send('Odds are in your favor.')
  }
  if (number == 6) {
    return message.channel.send('I am not so sure about that one chief')
}
if (number == 7) {
  return message.channel.send('Yes 100%')
}    
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
   }else if(command === 'kill'){let user = message.mentions.users.first();
      if (!user) {
          return message.channel.send('Please include who you are killing.')
      }
      return message.channel.send(message.author.username + ' Killed ' + user.username)
  }else if(command === 'rps'){  
    
    if(usedCommand.has(message.author.id)){
      message.reply('You cannot use the command beacuse of the cooldown.')
  } else {

    if (!args[0]) {
      return message.channel.send('Please include your choice.')
  }

  let choices = ['rock', 'paper', 'scissors'];
  if (choices.includes((args[0]).toLowerCase())) {
      let number = Math.floor(Math.random() * 3);
      if (number == 1) {
          return message.channel.send('It was a tie, we both had ' + (args[0]).toLowerCase())
      }
      if (number == 2) {
          if ((args[0]).toLowerCase() == "rock") {
              return message.channel.send('I won, I had paper.')
          }
          if ((args[0]).toLowerCase() == "paper") {
              return message.channel.send('I won, I had scissors.')
          }
          if ((args[0]).toLowerCase() == "scissors") {
              return message.channel.send('I won, I rock.')
          }
      }
      if (number == 0) {
          if ((args[0]).toLowerCase() == "rock") {
              return message.channel.send('You won, I had scissors.')
          }
          if ((args[0]).toLowerCase() == "paper") {
              return message.channel.send('You won, I had rock.')
          }
          if ((args[0]).toLowerCase() == "scissors") {
              return message.channel.send('You won, I paper.')
          }
      }
  } else {
      return message.channel.send('Please include either: Rock, Paper, or Scissors.')
  }
     
      
      
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
  }
    
    
    }else if(command === 'mute'){
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to mute anyone"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
      const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("I won't mute you -_-");
    }
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "muted")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `muted`, make sure to deny send message permission for the role")
    }
    if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    user.roles.add(muterole)
    
    await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
        
        user.send(`You are muted in **${message.guild.name}** For \`${reason}\``);
    }else if(command === 'unmute'){
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unmute anyone"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
      const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User do not have mute role so what i am suppose to take")
    }
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)
    
    user.send(`You are now unmuted from **${message.guild.name}**`)

    }else if(command === 'trivia'){
      
        if(usedCommand.has(message.author.id)){
            message.reply('You cannot use the command beacuse of the cooldown.')
        } else {
          
          let questions = [
            {
              title: "Best programming language",
              options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
              correct: 1,
            },
            {
              title: "Best NPM package",
              options: ["int.engine", "ms", "ws", "discord.js"],
              correct: 3,
            },
            {
              title: "What is the best photo editing PC program",
              options: ["Photoshop", "Windows photo editor", "gimp", "Paint.NET"],
              correct: 1,
            },
            {
              title: "What is better",
              options: ["Skype", "Zoom", "Microsoft Teams", "Discord"],
              correct: 4,
            },
            {
              title: "What won the oscar",
              options: ["Joaquin Phoenix", "Renee Zellweger", "Brad Pitt", "All of the above"],
              correct: 4,
            },
            {
              title: "Which one of these company's sue apple",
              options: ["Samsung", "Epic Games", "Nokia", "OnePlus"],
              correct: 2,
            },
            {
              title: "Which one of these companies is the most wealthy",
              options: ["Samsung", "Apple", "Google", "Tencent Games"],
              correct: 1,
            },
            {
              title: "What empire became the end of Mongol empire",
              options: ["British Empire", "Egyption Empire", "Ottoman Empire", "Roman Empire"],
              correct: 3,
            },
            {
              title: "In 2012 the German-speaking microstate \"Liechtenstein\" in Central Europe had a population of how many inhabitants?",
              options: ["2,400", "323,400", "36,600", "90,000"],
              correct: 3,
            },
            
          ];
              let q = questions[Math.floor(Math.random() * questions.length)];
              let i = 0;
              const Embed = new Discord.MessageEmbed()
                .setTitle(q.title)
                .setDescription(
                  q.options.map((opt) => {
                    i++;
                    return `${i} - ${opt}\n`;
                  })
                )
                .setColor(`GREEN`)
                .setFooter(
                  `Reply to this message with the correct question number! You have 15 seconds.`
                );
              message.channel.send(Embed);
              try {
                let msgs = await message.channel.awaitMessages(
                  (u2) => u2.author.id === message.author.id,
                  { time: 15000, max: 1, errors: ["time"] }
                );
                if (parseInt(msgs.first().content) == q.correct) {
                  return message.channel.send(`You got it correct!`);
                } else {
                  return message.channel.send(`You got it incorrect.`);
                }
              } catch (e) {
                return message.channel.send(`You did not answer!`);
              }
            }
           
            
            
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
      
      
      
       else if(command === 'report'){
        const bugreport = new Discord.MessageEmbed()
        .setTitle('Bug Report Format')
        .setFooter('To file a bug report, you must follow the format, as slowmode is set to 1 hour.')
        .addField('Example:', report)
        .setColor(0Xed1329)


        message.channel.send(bugreport);
      }else if(command === 'suggestion'){

        if(usedCommand.has(message.author.id)){
          message.reply('As this is a suggestion command and to avoid raid/spam with this the slowmode has been increased to being **1 HOUR**')
      } else  {
        if (!args[1]) {
          return message.channel.send('Suggestion needs to have atleast 2 words')
      }
      if (client.channels.fetch('735422598493503539')) {
          client.channels.fetch('735422598493503539').then(channel => {

            const suggestion = new Discord.MessageEmbed()
            .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
             .setThumbnail(message.author.avatarURL())
                .setColor("RANDOM")
               .setDescription(args.join(" "))
                   .setTimestamp()
              channel.send(suggestion);
             
        
          })
     
          message.channel.send('Your suggestion has been submitted')
      } else {
          return message.channel.send('You can now only suggest while being in the support server, please run the `.support` command to get a link to it')
      }
          
          
          
          usedCommand.add(message.author.id);
          setTimeout(() => {
              usedCommand.delete(message.author.id);
          }, 3600000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }

       

        
        
        
      }else if(command === 'format'){
        const format = new Discord.MessageEmbed()
        .setTitle('Suggestion Format')
        .setDescription('To submit a suggestion do .suggestion <suggestion here>,\n suggestion needs to have ATLEAST 2 WORDS')
        .setColor('BLUE')

message.channel.send(format);
      }else if(command === 'check'){

        var check = ["<a:aBF_CheckYes:747070401729003581> bot works", "<a:aBF_CheckNo:747070419668041788> Bot does not work properly"]
        var response = Math.floor(Math.random() * check.length)

        message.channel.send(`${check[response]}`);
      }else if(command === 'invite'){
        const invite = new Discord.MessageEmbed()
      .setTitle('PoPcorn Invite')
      .setDescription(`Ello ello! I'm quite excited you chose interest in me, down below are some very important links that help me out! Click **Bot Invite** to invite me to your server, Click **Support Server** for info how to use me, Click **top.gg, pbl or disbots** option To vote for me <a:aBF_partyblobCool:747607506892750869>\n[Bot invite](https://discord.com/oauth2/authorize?client_id=723506760299839499&scope=bot&permissions=2146958847)\n[Support server](https://discord.gg/MJHfQ54)\n[top.gg](https://top.gg/bot/723506760299839499)\n[pbl](https://paradisebots.net/bots/723506760299839499)\n[disbots](https://disbots.gg/bot/723506760299839499)`)
      .setColor('RANDOM')
        
        message.channel.send(invite);
        
  
      
      }else if(command === 'giveaway'){

        if(usedCommand.has(message.author.id)){
          message.reply('You cannot use the command beacuse of the cooldown.')
      } else {
        if(!message.member.hasPermission(['MANAGE_CHANNELS'])){
          return message.channel.send(`${message.author.tag} You cannot use that`)
        }
        if (!args[0]) return message.channel.send('Invalid Format: `.giveaway (Time) (Channel) (Prize)`. You have not entered the time ');
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `You did not use the correct formatting for the time!\n**PROTIP:** the formatting time is like this:\nm = minute Use example: 1m or 2m\nh = hour Use example: 1h or 2h\nd = day Use example: 1d or 2d`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Please enter a **VALID** number`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        'Invalid Format: `.giveaway (Time) (Channel) (Prize)`. You have not entered the channel '
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send('Invalid Format: `.giveaway (Time) (Channel) (Prize)`. You have not entered the prize ');
    message.channel.send(`*Giveaway has been started in ${channel}*`);
    let Embed = new Discord.MessageEmbed()

      .setTitle(`**${prize}**`)
      .setDescription(`React with :tada: to enter\nHosted by: ${message.author.username}!!!`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Uh oh not enough people reacted for me to draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
        const winners = new Discord.MessageEmbed()
        .setDescription(`And the winner for ${prize} hosted by ${message.author.tag} is...${winner}!!!`)
       .setColor('RANDOM')
      channel.send(
        winners
      );
    }, ms(args[0]));
         
          
          
          usedCommand.add(message.author.id);
          setTimeout(() => {
              usedCommand.delete(message.author.id);
          }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
      }
      
        
  }else if(command === 'youtube'){
    const randomvid = new Discord.MessageEmbed()
    .setTitle('Here is a random Youtube vid')
    .setDescription(`**[Random Video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**`)
    .setColor('RANDOM')
    message.channel.send(randomvid)
  }else if(command === 'dashboard'){
    const dashbords = new Discord.MessageEmbed()
    .setTitle('PoPcorn Bot\'s dashbord')
    .setDescription(`[Dashboard](https://www.youtube.com/watch?v=iik25wqIuFo)`)
    .setColor('RANDOM')
    message.channel.send(dashbords);
  }else if(command === 'automod'){

    if(!message.member.hasPermission(['ADMINISTRATOR'])){
      return message.channel.send('You require `Administrator` permission to run this command ')
    }
    if(args[0] === 'disable'){
      return message.channel.send('Auto Mod has been disabled for this guild')
    }else  if(args[0] === 'enable'){

    
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        let confirm = false;
   
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
   
      }
      if(confirm) {
        message.delete()
        return message.channel.send("You are not allowed to send badwords here")
      }    

    }
    function is_url(str) {
      let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if(regexp.test(str)) {
        return true;
      } else {
        return false;
      }
      
    }
    

      if(is_url(message.content) === true) {
        message.delete()
        return message.channel.send("You can not send link here :/")
      
     
    }

    return message.channel.send('Auto-Mod has been enabled for this guild')

               
    
  }
  }else if(command === 'simp'){
    if(message.author.id === '642308656217456641'){
      let simpss = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setTitle("Hmmmm what is your simp rate at?")
          .setDescription(`**LagsAlot** simp rate is...100%`)
          .setColor(`RANDOM`)
          message.channel.send(simpss)
    }else {
      let ship = Math.floor(Math.random() * 100) + 1;
 
    let user = message.mentions.users.first() || message.author
 
      if(!user) {
        return message.channel.send("Make sure you pick a person who you want to ship!");
      }
 
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setTitle("Hmmmm what is your simp rate at?")
          .setDescription(`**${user.username}** simp rate is... ${ship}%`)
          .setColor(`RANDOM`)
          message.channel.send(embed)
    }
    
    }else if(command === 'logs'){
      message.channel.send('Please create a channel with the name `bot-log` for me to start logging')
    }else if(command === 'suggest-blacklist'){
      if(!message.author.id === '642308656217456641'){
        return message.channel.send('You __**CANNOT**__ blacklist users from submitting suggestions')
      }
      

      if(!blacklisted){
        return message.channel.send('Please give a user to blacklist from suggesting')
      }

      const xDblacklisted = new Discord.MessageEmbed()
      .setTitle('Blacklist')
      .setDescription(`${message.author.tag} has blacklisted ${blacklisted} from submitting suggestiongs`)
      .setColor('RANDOM')
      message.channel.send(xDblacklisted)

      blacklisted.send(`You were blacklisted from submitting suggestions by ${message.author.tag}`)
    }else if(command === 'guild'){
      if(message.author.id === '492571742192009226'){
        const bbb = new Discord.MessageEmbed()
        .setTitle('Guild Blacklist')
        .setDescription('This guild has been blacklisted from using popcorn bot\nDuration: Permenat\nBy: LagsAlot#5671\nReason: Attempting to raid PoPcorn official support server')
        .setColor('RANDOM')
        message.channel.send(bbb)
        message.delete()
       }else {
         return message.channel.send('You cannot blacklist guild')
       }
    }else if(command === 'spoiler'){
      if(!args[0]){
        return message.channel.send('Hey! give me something to put in spoiler')
      }
      
      const sopoiled = new Discord.MessageEmbed()
      .setDescription(`||${args.slice(0).join(" ")} ||`)
      .setColor('RANDOM')
      message.delete()

      message.channel.send(sopoiled);


    }else if (command === "spotify") {
      if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    }else{
      let user;
      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }

      let status;
      if (user.presence.activities.length === 1)
        status = user.presence.activities[0];
      else if (user.presence.activities.length > 1)
        status = user.presence.activities[1];

      if (
        user.presence.activities.length === 0 ||
        (status.name !== "Spotify" && status.type !== "LISTENING")
      ) {
        const nospotify = new Discord.MessageEmbed()
        .setDescription('That user is not listening to spotify or they haven\'t connected there spotify account')
        .setColor('RANDOM')
        return message.channel.send(nospotify);
      }

      if (
        status !== null &&
        status.type === "LISTENING" &&
        status.name === "Spotify" &&
        status.assets !== null
      ) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(
            8
          )}`,
          url = `https:/open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText;
          
        const embed = new Discord.MessageEmbed()
          .setAuthor(
            "Spotify Track Information",
            "https://image.flaticon.com/icons/svg/2111/2111624.svg"
          )
          .setColor(0x1ed768)
          .setThumbnail(image)
          .addField("Name:", name, true)
          .addField("Album:", album, true)
          .addField("Artist:", artist, true)
          .addField(
            "Listen now on Spotify!",
            `[\`${artist} - ${name}\`](${url})`,
            false
          );
        return message.channel.send(embed);
      }
    }
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }else if(command === 'partners'){
      const partners = new Discord.MessageEmbed()
      .setTitle('PoPcorn Partners')
      .addField('PBL | Paradise Bot\'s list', pbl)
      .setColor('RANDOM')
      message.channel.send(partners);
    }else if(command === 'love'){
      let loverates = Math.floor(Math.random() * 100) + 1;
      const loved = message.mentions.members.first()
      if(!loved){
        return message.channel.send('Please mention a user to check the love rate ')
      }
      const loverate = new Discord.MessageEmbed()
      .setDescription(`The love rate between ${message.author.tag} and ${loved} is...${loverates}%`)
      .setImage('https://tenor.com/view/baby-yoda-ilove-you-heartbeat-heart-love-gif-15951417')
      .setColor('RANDOM')
      message.channel.send(loverate);
    }else if(command === 'timer'){
      if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    }else {
      if (!args[0]) {
        return message.channel.send(
          `Please specify an amount of time`
        );
      }
      if (!args[0].endsWith("d")) {
        if (!args[0].endsWith("h")) {
          if (!args[0].endsWith("m")) {
            return message.channel.send(
              `You did not use the correct formatting for the time!\n**PROTIP:** the formatting time is like this:\nm = minute Use example: 1m or 2m\nh = hour Use example: 1h or 2h\nd = day Use example: 1d or 2d`
            );
          }
        }
      }
      if (isNaN(args[0][0])) {
        return message.channel.send(`Please type a **NUMBER**`);
      }
      Timers.set(message.author.id + " G " + message.guild.name, {
        Guild: message.guild.name,
        Author: {
          Tag: message.author.tag,
          ID: message.author.id,
        },
        Time: ms(args[0]),
      });
      message.channel.send(
        `A timer has been set for ${message.author.tag} with the time of: ${args[0]} (make sure you have DM's on and have not blocked the bot)`
      );
      setTimeout(() => {
        let Embed = new Discord.MessageEmbed()
          .setTitle(`Timer has been set for ${message.guild.name}..`)
          .setDescription(
            `Your timer for ${args[0]} (${ms(args[0])}MS) has been finished`
          )
          .setColor(`GREEN`);
        message.author.send(Embed);
        Timers.delete(message.author.id + " G " + message.guild.name);
      }, ms(args[0]));
    

      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  
    
    }else if(command === 'hack'){
      var email = [
        "hack@gmail.com",
        "pepe@gmai.com",
        "retroX@gmai.com",
        "cyra@gmai.com",
        "IAmAHuman@gmai.com",
        "bestro@gmail.com",
        "dummy@gmail.com",
        "extremely@gmail.com",
        "simp@gmail.com",
        "bruh@gmail.com" //little pyramid tho
      ];
      var emails = Math.floor(Math.random() * email.length);
      var pass = [
        "r2rtrt34tbbfb",
        "sakfpegkk404g",
        "4444444444444444444444",
        "104t58203",
        "59539642046y94-3",
        "r3t9ttytmgrgke-0g4i",
        "01010101010000000000000000000000",
        "20456292-5549",
        "40t30-2tjf",
        "294tu4025u5305fo2gj" //little pyramid tho
      ];
      var password = Math.floor(Math.random() * pass.length);
      let ppusersss = message.mentions.users.first()
      if(!ppusersss){
        return message.channel.send('Please mention a user to hack!')
      }
      const hacked = new Discord.MessageEmbed()
        .setDescription(`${ppusersss}'s email: ${emails[email]} password: ${password[pass]} `)
    .setColor('RANDOM');
    
      message.channel.send(hacked);


    }else if(command === 'code'){
      if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    }else {
      if (!args[0]) return message.channel.send("Please choose either to encode (`.code encode`) or to decode (`.code decode`)");

      let choice = ["encode", "decode"];
      if (!choice.includes(args[0].toLowerCase())) return message.channel.send("Unknown choice the correct choices are: encode (`.code encode`) and decode (`.code decode`) ");
  
      let text = args.slice(1).join(" ");
      // binary <encode | decode> <text>
      // binary encode blob development
  
      if (!text) return message.channel.send("Please give me some text");
  
      // Do this because more than that, the binary code wouldn't be fit anymore.
      if (text.length > 1024) return message.channel.send("Please make sure the character limit is below or is `1,024`");
  
      function encode(char) {
          return char.split("").map(str => {
              const converted = str.charCodeAt(0).toString(2);
              return converted.padStart(8, "0");
          }).join(" ")
      };
  
      function decode(char) {
          return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
      };
  
      if (args[0].toLowerCase() === "encode") {
          return message.channel.send(encode(text));
      } else if (args[0].toLowerCase() === "decode") {
          return message.channel.send(decode(text));
      }
      usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    }else if(command === 'covid'){
      if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    }else {
       let countries = args.join(" ");
  
          //Credit to Sarastro#7725 for the command :)
  
          const noArgs = new Discord.MessageEmbed()
          .setTitle('Missing arguments')
          .setColor(0xFF0000)
          .setDescription('Please choose either `.covid all` or `.covid {country})`')
          .setTimestamp()
  
          if(!args[0]) return message.channel.send(noArgs);
  
          if(args[0] === "all"){
              fetch(`https://covid19.mathdro.id/api`)
              .then(response => response.json())
              .then(data => {
                  let confirmed = data.confirmed.value.toLocaleString()
                  let recovered = data.recovered.value.toLocaleString()
                  let deaths = data.deaths.value.toLocaleString()
  
                  const all = new Discord.MessageEmbed()
                  .setTitle(`Worldwide COVID-19 Stats 🌎`)
                  .addField('Confirmed Cases', confirmed)
                  .addField('Recovered', recovered)
                  .addField('Deaths', deaths)
                  .setColor(0xD22C2C)
                  message.channel.send(all)
              })
          } else {
              fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
              .then(response => response.json())
              .then(data => {
                  let confirmed = data.confirmed.value.toLocaleString()
                  let recovered = data.recovered.value.toLocaleString()
                  let deaths = data.deaths.value.toLocaleString()
  
                  const only = new Discord.MessageEmbed()
                  .setTitle(`COVID-19 Stats for **${countries}**`)
                  .addField('Confirmed Cases', confirmed)
                  .addField('Recovered', recovered)
                  .addField('Deaths', deaths)
                  .setColor(0xD22C2C)
  
                  message.channel.send(only)
              }).catch(e => {
                  return message.channel.send('Invalid country')
              })
            } 
          }
          usedCommand.add(message.author.id);
      setTimeout(() => {
          usedCommand.delete(message.author.id);
      }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    
          }else if(command === 'message-logs'){
            message.channel.send('Please create a channel with the name of `message-logs` for me to start message logging in it')
          }else if(command === 'invite-logs'){
            message.channel.send('Please create a channel with the name of `invite-logs` for me to start invite logging')
          }else if (command === "chat") {
            if(!args[0]){
              return message.channel.send('Please type a message for me to reply to its')
            }
            message.channel.startTyping()
            const response = await fetch(`https://some-random-api.ml/chatbot?message=${encodeURIComponent(args.slice(0).join(" "))}`)
            const json = await response.json()
            message.channel.send(json.response)
            return message.channel.stopTyping(true)
          }else if(command === 'uptime'){
            if(usedCommand.has(message.author.id)){
              message.reply('You cannot use the command beacuse of the cooldown.')
          }else {
            let totalseconds = client.uptime / 1000
            let dayss = Math.floor(totalseconds / 86400)
            let hourss = Math.floor(totalseconds / 3600)
            totalseconds % 3600
            let minutess = Math.floor(totalseconds / 60)
            let secondss = Number.parseInt(totalseconds & 60)

            let dDay = `${dayss} Day`
            let dHour = `${hourss} Hour`
            let dMinute = `${minutess} Minute`
            let dSecond = `${secondss} Second`

            if(dayss == 0 ) dDay = ""
            else if(dayss > 1) dDay  += "s", ""
            if(hourss == 0 ) dHour = ""
            else if(hourss > 1) dHour  += "s", ""
            if(minutess == 0 ) dMinute = ""
            else if(minutess > 1) dMinute  += "s", ""
            if(secondss == 0 ) dSecond = ""
            else if(secondss > 1) dSecond  += "s", ""

          const plsuptime = new Discord.MessageEmbed()
          .setTitle('PoPcon Uptime')
          .setDescription(`The current Uptime is: ${dDay} ${dHour} ${dMinute} ${dSecond}`)
          .setColor('RED')
          message.channel.send(plsuptime)
          }usedCommand.add(message.author.id);
          setTimeout(() => {
              usedCommand.delete(message.author.id);
          }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
          }else if(command === 'panda-fact'){
            if(usedCommand.has(message.author.id)){
              message.reply('You cannot use the command beacuse of the cooldown.')
          }else {
            const fact = await fetch('https://some-random-api.ml/facts/panda')
            const plsfact = await fact.json()
            message.channel.send(plsfact.fact)
          }usedCommand.add(message.author.id);
          setTimeout(() => {
              usedCommand.delete(message.author.id);
          }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
          }else if(command === 'cc-create'){
            if (!message.member.permissions.has("ADMINISTRATOR")){
      return message.channel.send(`You require the \`Administrator\`permission to create custom commands!`);
            }
    if (!args[0])
      return message.channel.send(`Please give a name for your custom command!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`Please give some message content for your custom command!`);
    custom.findOne(
      { Guild: message.guild.id, Command: args[0] },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          data.Content = args.slice(1).join(" ");
          data.save();

          message.channel.send(
            `Successfully updated the command \`${args[0]}\``
          );
        } else if (!data) {
          let newData = new custom({
            Guild: message.guild.id,
            Command: args[0],
            Content: args.slice(1).join(" "),
          });
          newData.save();
          message.channel.send(
            `Successfully created the custom command \`${args[0]}\`, to use it simply type \`.${args[0]}\``
          );
        }
        })
          }
          
          custom.findOne(
            { Guild: message.guild.id, Command: command },
            async (err, data) => {
              if (err) throw err;
              if (data) return message.channel.send(data.Content);
              else return;

            })


    
    
    

  
      });



      client.login(process.env.token); 
