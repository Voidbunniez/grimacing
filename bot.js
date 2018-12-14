const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.username === 'Ich_Bin_Alucard/ LastPestilence') {
        msg.react("😬")
    }
});

client.login(auth.token);