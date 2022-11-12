import { readdirSync } from 'fs'
import { resolve } from 'path'

class CommandHandler {
  commands = new Map()
  aliases = {
    'p': 'play',
    's': 'skip',
    'q': 'queue'
  }

  async init(prefix) {
    this.prefix = prefix
    const path = resolve('./lib/commands')
    const files = readdirSync(path)

    for (let file of files) {
      const { default: command } = await import(`../commands/${file}`)
      if (!command?.name) continue

      this.commands.set(command.name, command)
    }
  }

  async handle(msg) {
    if (msg.author.bot || !msg.content.startsWith(this.prefix)) return

    
    try {
      const args = msg.content.split(' ').slice(1)
      let commandName = msg.content.split(' ')[0].slice(this.prefix.length)
      if (this.aliases[commandName]) commandName = this.aliases[commandName]

      const command = this.commands.get(commandName)
      await command?.execute(msg, ...args) 
    } 
    catch (error) { await msg.channel.send(`${error?.message}`) }
  }
}

export default CommandHandler