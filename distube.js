//traemos client desde index
const {client} = require('./index')

//creamos a distube
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
.on("empty", msg => {
    msg.channel.send("Channel is empty. Leaving the channel")
})
.on("error", (msg, err) =>{
    msg.channel.send("An error encountered: " + err)
});
module.exports = {
    distube
}
