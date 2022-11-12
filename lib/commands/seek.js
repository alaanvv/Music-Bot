import Command from './command.js'
import MusicHandler from '../handlers/music-handler.js'

export default new class extends Command {
  name = 'seek'

  async execute(msg, time) {
    const player = MusicHandler.get(msg)

    if (!time) return msg.channel.send(`> Player is at position \`${player.position}s\`.`)

    let sec = time.split(':')
    console.log(time)
    sec = Number(time[0]) * 60 + Number(time[1])

    await player.seek(sec)
    await msg.channel.send(`> Seeked to \`${time}\`.`)
  }
}
