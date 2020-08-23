const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';
const Poll_Emoji_2 = "👎";
const Poll_Emoji_1 = "👍";
var changes = 'added 1 command (.trivia) Fixed bugs and crashes,';
var info = '```.avatar , .ping, .user, .botinfo, .serverinfo, .ping, .support```';
var mod = '```.ban (user), .kick (user), .warn (user), .purge, .lock (on or off), .softban (user here), .slowmode (number here), .mute (user here), .unmute (user here)```'
var fun = '```.meme, .reverse (message here), .hug (user here), .say (message here), .penis, .emojify (message here), .clyde (message here), .8ball (your message here), .kill (user name here)), .rps (rock, paper or scissors), .trivia```'

var version = 'v1.7';






const EmbedColor = "RANDOM";

const ytdl = require("ytdl-core")
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
  client.user.setActivity('people type .help', { type: 'WATCHING' })
    console.log(`Bot is online | used in server LOL`);

client.on('message', async message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();


  
  

  if (command === 'ping') {
    message.channel.send(`Pong \`${Math.round(client.ws.ping)}ms\``);

  } else if (command === 'help') {
    const help = new Discord.MessageEmbed()
      .setTitle('Help command')
      .addField(':information_source: Info', info)
      .addField(':shield: Moderation', mod)
      .addField('🤣 Fun', fun)
      .setColor('RANDOM')

    message.channel.send(help);
  } else if (command === 'commands') {
    const commands = new Discord.MessageEmbed()
      .setTitle('oopsie')
      .setFooter('Oh it looks like this command has been **MOVED**, please do .help and try again!')


    message.channel.send(commands);
  } else if (command === 'warn') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {

      const warn = new Discord.MessageEmbed()
        .setTitle('You require `Manage Messages` permission to run this command')
        .setColor(0x15ff00)


      message.channel.send(warn)
    } else {
      if (!args[1]) return message.channel.send('Please state a user')

      const warn2 = new Discord.MessageEmbed()
        .setTitle('User has been warned')
        .addField('Reason', (args[2]))
      message.channel.send(warn2)
    }

  } else if (command === 'support') {

    message.channel.send('Join **PoPcorn Support** server here: https://discord.gg/MJHfQ54 ');
  } else if (command === 'info') {
    const info = new Discord.MessageEmbed()
      .setTitle('Info')
      .setFooter('PoPcorn bot is a discord bot made by LagsAlot#5671, this bot had many features (fun and moderation)')

    message.channel.send(info);
  } else if (command === 'purge') {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
    return message.channel.send(
        `You do not have correct permissions to do this action, ${message.author.username}` // returns this message to user with no perms
    );
if (!args[0]) {
    return message.channel.send(`Please enter a amount 1 to 100`)
}

let deleteAmount;

if (parseInt(args[0]) > 100 ) {
    deleteAmount = 100;
} else {
    deleteAmount = parseInt(args[0]);
}

await message.channel.bulkDelete(deleteAmount, true);

const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`successfully deleted ${deleteAmount} message(s)`)
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setColor('#f2f2f2')
await message.channel.send(embed)

  } else if (command === 'say') {
    message.channel.send(args.slice(0).join(" "));
  }else if(command === 'spank'){
    if (!args[1]) return message.channel.send('state user')
  message.channel.send('spanked the user https://tenor.com/view/spank-tomandjerry-gif-5196956');

  }else if(command === 'slap'){
    if (!args[1]) return message.channel.send('User specification is required')
  message.channel.send('Slapped specified user https://tenor.com/view/vanderpump-rules-pump-rules-slap-gif-4474446');

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
      .addField("Owner:", `LagsAlot#5671`)
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
    const serverinfo = new Discord.MessageEmbed()
    .setTitle('Server Info')
    .addField('Server Owner', message.guild.owner)
    .addField('Reigon', message.guild.region)
    .addField('AFK voice channel ID', message.guild.afkChannel.id)
    .addField('Member count', message.guild.memberCount)
    .addField("Channel's:", message.guild.channels.cache)
    .addField("Created:", client.user.createdAt)
    .setThumbnail(message.guild.iconURL)
    .setColor(0xfd0000)
  message.channel.send(serverinfo);

  }else if(command === 'ban'){if (!message.member.hasPermission(['BAN_MEMBERS'])) {
    message.channel.send(`**${message.author.username}**, you dont have permission to ban someone`)
  }

  if (!message.guild.me.hasPermission(['BAN_MEMBERS'])) {
    return message.channel.send(`**${message.author.username}**, i do not have the permission to ban someone`)
  }

  const target = message.mentions.members.first();

  if (!target) {
    return message.channel.send(`**${message.author.username}**, you need to menton a user`)
  }

  if (target.id === message.author.id) {
    return message.channel.send(`**${message.author.username}**, you cannot ban yourself!`)
  }


  if (!args[1]) {
    return message.channel.send(`**${message.author.username}**, you need to provide a reason to ban a user`)
  }

  if (target.id === message.guild.ownerID) {
    return message.channel.send(`**${message.author.username}**, that user is the server owner i cannot ban that user`)
  }

  if(!target.bannable) return message.channel.send('That user is a Moderator or my roles are not high enough to ban that user')
  


  let ban = new Discord.MessageEmbed()
    .setTitle(`*successfully Banned ${target}*`)
    .setColor(0x3BF04B)
    .setFooter(`Banned by ${message.author.tag}`)

  message.channel.send(ban)
  target.ban(args[1])
  target.send(`You were **BANNED** in ${message.guild.name}, banned by: ${message.author.username}`)
}else if(command === 'kick'){if (!message.member.hasPermission(['KICK_MEMBERS'])) {
  message.channel.send(`**${message.author.username}**, you dont have permission to kick someone`)
}

if (!message.guild.me.hasPermission(['KICK_MEMBERS'])) {
  return message.channel.send(`**${message.author.username}, i do not have the permission to kick someone`)
}

const userg = message.mentions.members.first();

if (!userg) {
  return message.channel.send(`**${message.author.username}**, you need to menton a user`)
}

if (userg.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, you cannot kick yourself!`)
}


if (!args[1]) {
  return message.channel.send(`**${message.author.username}**, you need to provide a reason to kick a user`)
}

if (target.id === message.guild.ownerID) {
  return message.channel.send(`**${message.author.username}**, that user is the server owner i cannot kick that user`)
}


let kickedf = new Discord.MessageEmbed()
  .setTitle(`successfully kicked ${userg}`)
  .setDescription()
  .setColor(0x15daea)
  .setFooter(`kicked by ${message.author.tag}`)

message.channel.send(kickedf)
userg.kick(args[1])
userg.send(`You were **KICKED** in ${message.guild.name}, kicked by ${message.author.username}`)
}else if(command === 'avatar'){
  let user = message.author || message.mentions.users.first();

  let embed = new Discord.MessageEmbed()
  .setTitle(`${user.username}'s Avatar!`)
  .setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
  .setColor("RANDOM")
  message.channel.send(embed);
}else if(command === 'reverse'){
  if (!args[0]) { 
		return message.channel.send(`Please Give Me Text!`) 
       } else {
        const embed = new Discord.MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setDescription(args.join(' ').split('').reverse().join(''))
		  message.channel.send(embed)};

      await message.delete();
    }else if(command === 'poll'){
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
          var num = Math.floor(Math.random() * (500 - 1) + 1)

         message.channel.send(`https://ctk-api.herokuapp.com/meme/${num}`);
        }else if(command === 'whois'){message.channel.send('Your a **HUMAN**');
        }else if(command === 'play'){const voiceChannel = message.member.voice.channel
          const play = new Discord.MessageEmbed()
         .setTitle('You need to be in a Voice Channel to run this command')
         .setColor(0xf0ff00);


          if(!voiceChannel) return message.channel.send(play)

         const permissions = voiceChannel.permissionsFor(message.client.user)
         if(!permissions.has('CONNECT')) return message.channel.send(':no_entry_sign: I dont have the permission `connect` so i can\'t run this command')
         if(!permissions.has('SPEAK')) return message.channel.send(':no_entry_sign: I don\'t have `Speak` permission')


         try{
                var connection = await voiceChannel.join()
         }catch (error){
           console.log(`error connecting ${error}`)
           message.channel.send(':x: Erorr while connection to the Voice Channel')
         }

         const dispatcher = connection.play(ytdl(args[1]))
         .on('finish', () => {
           voiceChannel.leave()
           message.channel.send('I have left the voice channel after playing the music ')
         })
    .on('error', error =>{
      console.log(error)
      message.channel.send(':x: oopsie an error occurred')
    })
    dispatcher.setVolumeLogarithmic(5 / 5)
}else if(command === 'setnick'){
let name = args.slice(1).join(" ")

if(!message.member.hasPermission(['MANAGE_NICKNAMES'])){
  message.channel.send(':x: you dont have `MANAGE MESSAGES` permission')
  if(args[0]) return message.channel.send(':x: Mention a USER!')

  const changenick = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

  if(!changenick) return message.channel.send('Unable to find that user')

  if(!name) return message.channel.send(':x: what should the name be')

  if(changenick.kickable) return message.channel.send('I can tchange there username')
  changenick.setNickname(name)

  message.channel.send('Changed there nickname');
}
}else if(command === 'new'){
  const updates = new Discord.MessageEmbed()
  .setTitle('Whats new!')
  .addField('Current version', version)
  .addField('Changes To The Bot', changes)
  .setFooter(`PoPcorn Bot | Made by LagsAlot#5671`)
  .setColor('RANDOM')
  .setTimestamp(Date.now())

  message.channel.send(updates);
}else if(command === 'lock'){
  if(!message.member.hasPermission(['MANAGE_CHANNELS'])){
    return message.channel.send('You dont have `MANAGE CHANNELS` permission')
  }
  
  
  const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
  if (args[0] === 'on') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: false
          }).then(() => {
              channel.setName(channel.name += `🔒`)
          })
      })
      return message.channel.send('locked all channels \n Note that after a SERVER LOCKDOWN is over all the channel permission IS SET TO YES meaning that user can send messages in ANY CHANNEL you have to fix that manually by going in channel settings');
  } else if (args[0] === 'off') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: true
          }).then(() => {
                  channel.setName(channel.name.replace('🔒', ''))
              }
          )
      })
      return message.channel.send('unlocked all channels')
    }
  }else if(command === 'restart'){
      const OWNER_ID  = '642308656217456641'; 
  
      if (message.author.id === OWNER_ID) {
          message.channel.send(`Ok, ${message.author}, I'll restart....`);
          message.channel.send(`Shutting down port...`)
          setTimeout(() => {
              process.exit(0);
          }, 5000);
      } else {
          return message.channel.send("You are not able to force the bot to restart.");
      }
  }else if(command === 'check'){

message.channel.send(':check: No problem found in the bot');



  }else if(command === 'penis'){var facts = [
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
}else if(command === 'clyde'){if (!args[0]) return message.channel.send('What do you want clyde to say?');
let clydeMessage = args.slice(0).join(' ');
let encodedLink = encodeURI(`https://ctk-api.herokuapp.com/clyde/${clydeMessage}`);

const clydeembed = new Discord.MessageEmbed()
.setImage(encodedLink)
.setColor('RANDOM')

message.channel.send(clydeembed)



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
  }else if(command === '8ball'){
    if (!args[2]) {
        return message.channel.send('Please ask a full questions.')
    }
    let number = Math.floor(Math.random() * 6);
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
    }}else if(command === 'kill'){let user = message.mentions.users.first();
      if (!user) {
          return message.channel.send('Please include who you are killing.')
      }
      return message.channel.send(message.author.username + ' Killed ' + user.username)
  }else if(command === 'rps'){  if (!args[0]) {
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
    }}else if(command === 'mute'){
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

    }else if(command === 'trivia'){let questions = [
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

  })
      });



      client.login(process.env.token); 
