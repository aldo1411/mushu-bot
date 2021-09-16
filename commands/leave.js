const discord = require('discord.js')
const { distube } = require('./../distube')

//no funciona, quizás una solución es hacer stop y luego leave
const leaveCommand = (msg) =>{
    if(!msg.member.voice.channel) return msg.channel.send('Before making me leave please enter to a voice channel')
    if(msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.channel.send('Please enter to the voice channel where i am')
    if(!msg.guild.me.voice.channel) return msg.channel.send('Not even in a voice channel, stupid')

    msg.guild.me.voice.channel.leave()
    msg.channel.send('Leaving channel...')
}

module.exports = {
    leaveCommand
}
