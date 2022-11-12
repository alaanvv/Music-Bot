class Command {
  name = ''

  execute(msg, ...args) {
    throw new TypeError('Command not created')
  }
}

export default Command