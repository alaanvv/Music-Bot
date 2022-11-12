import Command from './command.js'
import MusicHandler from '../handlers/music-handler.js'

export default new class extends Command {
  name = 'unpause'

  async execute(msg) {
    const player = MusicHandler.get(msg)

    if (!player.isPaused) throw new TypeError('Player is not paused')
    await player.resume()

    await msg.channel.send(`> Unpaused`)
  }
}
