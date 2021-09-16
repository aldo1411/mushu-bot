const discord = require('discord.js')
const { distube } = require('./../distube')

const pauseCommand = (msg) =>{
  if(!msg.member.voice.channel) return msg.channel.send('before playing a song please enter to a voice channel')
  if(msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.channel.send('please enter to the voice channel where i am')

  const queue = distube.getQueue(msg)
  if(!queue) return msg.channel.send('Nothing to pause...')
  if(queue.pause) return msg.channel.send('Already paused!')

  distube.pause(msg)
  msg.channel.send(`Music paused`)
}

module.exports = {
    pauseCommand
}