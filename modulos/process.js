// El modulo de process esta de manera global en node, por lo que no es necesario importarlo

process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    console.log('El proceso acabó')
})

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado capturar un error')
    console.error(err)
})

functionQueNoExiste()

console.log('Esto si el error no se recoje, no sale')