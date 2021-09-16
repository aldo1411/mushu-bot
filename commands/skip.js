const discord = require('discord.js')
const { distube } = require('./../distube')

const skipCommand = (msg) =>{
    let queue = {
        songs: []
      }
      queue.songs.push('a')
    if(queue.songs[0] = 'a') return msg.channel.send('Nothing to skip...')

    queue = distube.getQueue(msg);
    distube.skip(msg)
    msg.channel.send('Sonng skipped')
}

module.exports = {
    skipCommand
}
