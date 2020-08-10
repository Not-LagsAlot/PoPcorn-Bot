const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';
const Poll_Emoji_2 = "👎";
const poll_Emoji_2 = "👍";
var changes = 'Added 2 new command (date and reverse <your message here>), Fixed bugs and crashes, removed alot of commands';


var commands = '.commands';

var version = 'v0.4';


const EmbedColor = "RANDOM";




client.once('ready', () => {
  client.user.setActivity('people type .help', { type: 'WATCHING' });
  console.log('This bot is online');


client.once('ready', () => {

client.on('message',async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
