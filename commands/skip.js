const discord = require('discord.js')
const { distube } = require('./../distube')

const skipCommand = (msg) =>{
    queue = distube.getQueue(msg);
    if(!queue) return msg.channel.send('Nothing to skip...')
    
    distube.skip(msg)
    msg.channel.send('Sonng skipped')
}

module.exports = {
    skipCommand
}
