import Command from './command.js'

export default new class extends Command {
  name = 'purge'

  async execute(msg, ...args) {
    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('No permissions')
    if(!args[0]) return msg.channel.send('Invalid arguments')

    msg.channel.bulkDelete(Number(args[0]) + 1)
  }
}
