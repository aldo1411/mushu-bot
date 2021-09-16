const discord = require('discord.js')
const { distube } = require('./../distube')

const continueCommand = (msg) =>{
  if(!msg.member.voice.channel) return msg.channel.send('before playing a song please enter to a voice channel')
  if(msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.channel.send('please enter to the voice channel where i am')

  const queue = distube.getQueue(msg)
  if(!queue) return msg.channel.send('Nothing to play...')
  if(queue.playing) return msg.channel.send('Already playing!')

  distube.resume(msg)
  msg.channel.send(`Music resumed`)
}

module.exports = {
    continueCommand
}