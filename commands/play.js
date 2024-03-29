const discord = require('discord.js')
const { distube } = require('./../distube')

const playCommand = (msg, args) =>{
  const song = args.join(' ')
  if (!song) return msg.channel.send('invalid song, please write a valid song')
  if(!msg.member.voice.channel) return msg.channel.send('before playing a song please enter to a voice channel')
  if(msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.channel.send('please enter to the voice channel where i am')

  distube.play(msg, song)
}

module.exports = {
  playCommand
}