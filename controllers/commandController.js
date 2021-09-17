const { prefix } = require('./../config.json')
const 
  { playCommand } = require('./../commands/play'),
  { skipCommand } = require('./../commands/skip'),
  { queueCommand } = require('./../commands/queue'),
  { leaveCommand } = require('./../commands/leave'),
  { pauseCommand } = require('./../commands/pause'),
  { continueCommand } = require('./../commands/continue'),
  { joinCommand } = require('./../commands/join')

module.exports = (msg) => {
  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  if (msg.author.bot) return;
  let args = msg.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift();

  switch (cmd) {
    case "play": 
    case "p":
      playCommand(msg, args)
      break;

    case "skip":
    case "s":
      skipCommand(msg)
      break

    case "queue":
      queueCommand(msg)
      break

    case "leave":
      leaveCommand(msg)
      break

    case "pause":
      pauseCommand(msg)
      break

    case "resume":
    case "r":
      continueCommand(msg)
      break

    case "join":
    case "j":
      joinCommand(msg)
      break

    default:
      msg.channel.send(`fool ***${msg.author}***`);
      break;
  }
}