import Command from './command.js'

export default new class extends Command {
  name = 'icon'

  async execute(msg) {
	  let user = msg.mentions.users.first() || msg.author

    msg.channel.send(user.avatarURL())
  }
}
