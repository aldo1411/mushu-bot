const Discord = require('discord.js')
const {prefix, token, presence, channels} = require('./config.json')
const client = new Discord.Client()
const channel = client.channels.cache.find(channels.notiClases)

client.once('ready', () => {
  console.log('Bot Encendido')
  client.user.setPresence(presence)
})

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return

  const args = msg.content.slice(prefix.length).trim().split(/ +/g)
  const cmd = args.shift().toLocaleLowerCase()

  if (cmd == "play")
        distube.play(msg, args.join(" "));
});

//Distube
const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, leaveOnStop: false, leaveOnFinish: false, leaveOnEmpty: true})
distube
.on('addList', (message, queue, playlist) => {
    message.channel.send(`Playlist: \n **${playlist.name}** - ***${message.author}***`)
})
.on('addSong', (message, queue, song) =>{
    message.channel.send(`Added to queue **${song.name}** - **${song.formattedDuration}** - ***${message.author}***`)
})
.on('playSong', (message, queue, playsong) =>{
    message.channel.send(`Now playing: **${playsong.name}** - **${playsong.duration}**`)
})
.on('playlist', (message, queue, playlist) =>{
    message.channel.send(`Now playing playlist: **${playlist.name}** - **${message.author}**`)
})
.on('initQueue', (queue) =>{
    queue.autoplay = false
    queue.volume = 100
})


client.login(token)