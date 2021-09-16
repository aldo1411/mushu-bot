const discord = require('discord.js')
const { distube } = require('./../distube')

// //comando !queue no jala si hay un queue.songs === undefined (se rompe)
const queueCommand = (msg) =>{
    let queue = {
      songs: []
    }
    queue.songs.push('a')
    if(queue.songs[0] = 'a') return msg.channel.send('Nothing to show...')
    
    queue = distube.getQueue(msg);
    msg.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
        `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
    ).join("\n"));
}

module.exports = {
  queueCommand
}