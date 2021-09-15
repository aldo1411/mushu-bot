const discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name: '',
    alias: ['p'],
    execute (client, message, args){
        const song = args.join('')
        if (!song) return message.channel.send('invalid song, please write a valid song')

        if(!message.member.voice.channel) return message.channel.send('before playing a song please enter to a voice channel')

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('please enter to the voice channel where i am')

        client.distube.play(message, cancion)
    }
}