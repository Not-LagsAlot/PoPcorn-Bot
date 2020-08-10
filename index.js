const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';
const Poll_Emoji_2 = "👎";
const Poll_Emoji_1 = "👍";
var changes = 'Added 2 new command (date and reverse <your message here>), Fixed bugs and crashes, removed alot of commands';


var commands = '.commands';

var version = 'v0.4';


const EmbedColor = "RANDOM";




client.once('ready', () => {
  client.user.setActivity('people type .help', { type: 'WATCHING' });
  console.log('This bot is online');

client.on('message', async message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send(`Pong \`${Math.round(client.ws.ping)}ms\``);

  } else if (command === 'help') {
    const help = new Discord.MessageEmbed()
      .setTitle('Help command')
      .addField('Please select this option to get the list of commands', commands)

    message.channel.send(help);
  } else if (command === 'commands') {
    const commands = new Discord.MessageEmbed()
      .setTitle('These are the commands')
      .setFooter('.Warn\n .website\n .info\n .say\n .User\n .serverinfo\n .poll <type your poll here>\n .ban <user> <reason>\n .kick <user> <reason>\n .avatar\n .date\n .reverse <type your message here>\n .roast\n .slap')


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

    message.channel.send('OMG you haven\'t joined the support server yet! Join it here: https://discord.gg/MJHfQ54 ');
  } else if (command === 'info') {
    const info = new Discord.MessageEmbed()
      .setTitle('Info')
      .setFooter('PoPcorn bot is a discord bot made by LagsAlot#5671, this bot had many features (fun and moderation)')

    message.channel.send(info);
  } else if (command === 'purge') {
    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {

      message.channel.send('You require the `Manage Messages` permission to execute this command')
    }
    else {
      message.delete();
      message.channel.bulkDelete(args[1]);
    }
  } else if (command === 'say') {
    message.delete();
    message.channel.send(args.slice(1).join(" "));
  }else if(command === 'spank'){
    if (!args) return message.content.reply('state user')
  message.channel.send('spanked the user https://tenor.com/view/spank-tomandjerry-gif-5196956');

  }else if(command === 'slap'){
    if (!args[1]) return message.content.reply('User specification is required')
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
      .addField("Server's:", `${client.guilds.cache.size}`)
      .addField("users's:", `${client.users.cache.size}`)
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
    .addField('Created At', message.guild.channels.cache)
    .addField('Reigon', message.guild.region)
    .addField('AFK voice channel', message.guild.afkChannel)
    .addField('Member count', message.guild.memberCount)
    .addField('emojis', message.guild.emojis)
    .addField('Created',  createdAt)
    .setThumbnail(message.guild.iconURL)
    .setColor(0xfd0000)
  message.channel.send(serverinfo);

  }else if(command === 'ban'){if (!message.member.hasPermission(['BAN_MEMBERS'])) {
    message.channel.send(`**${message.author.username}**, you dont have permission to ban someone`)
  }

  if (!message.guild.me.hasPermission(['BAN_MEMBERS'])) {
    return message.channel.send(`**${message.author.username}, i do not have the permission to ban someone`)
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


  let ban = new Discord.MessageEmbed()
    .setTitle(`successfully Banned ${target}`)
    .setColor(0x3BF04B)
    .setFooter(`Banned by ${message.author.tag}`)

  message.channel.send(ban)
  target.ban(args[1]);
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
userg.kick(args[1]);
}else if(command === 'avatar'){
  const avaraat = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL())
  message.channel.send(avaraat);
}else if(command === 'date'){
  let date = new Date();
                
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let days = day[date.getDay()]
  
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let months = month[date.getMonth()]
  const dats = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Today\'s Date 📆")
  .setDescription(`${days}, ${months} ${date.getDate()}, ${date.getFullYear()}`)
  .setTimestamp();
  message.channel.send(dats);
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
        .setFooter(`Command Requested By : ${message.author.username}`)
        .setTimestamp();

      if (args.length === 0) {
        return message.channel.send(Embed);
      }

      let Message = args.slice(0).join(" ");

      let Poll = await message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setTitle(`${Message}"`)
          .setFooter(`Poll Created By : ${message.author.username}`)
          .setTimestamp()
      );

      await Poll.react(`${Poll_Emoji_1}`);
      await Poll.react(`${Poll_Emoji_2}`);
      await message.delete();
       }else if(command === 'hug'){
        let huggeds = message.mentions.members.first();
        let embed = new Discord.MessageEmbed()
        .setDescription(`${huggeds} was hugged by ${message.author.username}`)
        .setImage('https://i.imgur.com/V7PbDYd.gif')
        .setColor("#d09dd4")
        message.channel.send(embed); 
        }else if(command === 'meme'){
          var num = Math.floor(Math.random() * (500 - 1) + 1)

         message.channel.send(`https://ctk-api.herokuapp.com/meme/${num}`);
        }else if(command === 'whois'){let member =  message.mentions.members.first() || message.author;
          const user = message.mentions.members.first() || message.author
      
          if(!member)
          return message.channel.send("Please mention a member!");
        
          const roles = member.roles.cache
              .filter(r => r.id !== message.guild.id)
              .map(r => r.name).join(", ") || 'none'
  
          const bruh = new Discord.MessageEmbed()
              .setTitle("User Info")
              .setFooter(message.guild.name, message.guild.iconURL())
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
              .setColor("RANDOM")
              .addField(`${member.displayName}`)
              .addField("**ID**", `${member.user.id}`)
              .addField("**Tag**", `${member.user.tag}`)
              .addField("**Roles**", `${roles}`, true)
              .setTimestamp()
  
          message.channel.send(bruh);

        }
      })


      });

      client.login(process.env.token); 
