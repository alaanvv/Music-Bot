import Command from './command.js'
import MusicHandler from '../handlers/music-handler.js'

export default new class extends Command {
  name = 'queue'

  async execute(msg) {
    const player = MusicHandler.get(msg)
    const queue = player.q.items.map(track => `\`${track.title}\` | ${track.requestor}`).join('\n')

    await msg.channel.send(`> **Queue** \n\n${queue}`)
  }
}