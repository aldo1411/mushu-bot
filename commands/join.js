const discord = require('discord.js')
const { distube } = require('./../distube')
const { client } = require('./../index')

//no funciona, quizás una solución es hacer stop y luego leave
const joinCommand = (msg, cmd) =>{
    if(!msg.member.voice.channel) return msg.channel.send('Before making me join please enter to a voice channel')
    if(msg.guild.me.voice.channel && msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.channel.send('Please enter to the voice channel where i am')
    //si no está en un canal: 'Not even in a voice channel, stupid'
    const channelV = client.channels.cache.get(msg.member.voice.channel.id)

    channelV.join()
    msg.channel.send('Joining channel...')
}

module.exports = {
    joinCommand
}
