const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//define el evento y lo que realizara
customEmitter.on('x', (data, seconData) => {
    console.log('recibido')
    console.log(data)
    console.log(seconData)
})

//emite el evento y pasa los parametros
customEmitter.emit('x', 'hola alex', [23,34,56])
customEmitter.emit('x', 'hola luis', 234)