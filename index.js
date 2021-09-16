const Discord = require('discord.js')
const { token, presence, channels } = require('./config.json')
const client = new Discord.Client()
const channel = client.channels.cache.find(channels.notiClases)

client.once('ready', () => {
  console.log('Bot Encendido ajúaaaaaa')
  client.user.setPresence(presence)
})

client.on('message', msg => {
  //comando !play, !skip
  require('./controllers/commandController')(msg)
});

client.login(token)

module.exports = {
  client
}