const discord = require('discord.js')
const { distube } = require('./../distube')

// //comando !queue no jala si hay un queue.songs === undefined (se rompe)
const queueCommand = (msg) =>{
  queue = distube.getQueue(msg);
  if(!queue) return msg.channel.send('Nothing to show...')
  
  msg.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
      `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
  ).join("\n"));
}

module.exports = {
  queueCommand
}