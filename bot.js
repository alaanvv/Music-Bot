import { Client } from 'discord.js'
import CommandHandler from './lib/handlers/command-handler.js'

const prefix = '>'

const bot = new Client()

bot.on('ready', e => console.log('ready'))
bot.on('message', async msg => await commandHandler.handle(msg))

const commandHandler = new CommandHandler()
commandHandler.init(prefix)

bot.login('OTY5MDcwNDc5NzY1ODE1Mjk2.Go0X8L.bA6MGeNGqtfZo96w7PCgJhuJXOipnfEuauwCl8')
