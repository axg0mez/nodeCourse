const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer(
    (req, res) =>{
        const stream = createReadStream('./practica1/data/bigFile.txt',{
            encoding: 'utf-8' //se pueden cambiar varias propiedades, como por ejemplo el tamnio del buffer
        })
        
        stream.on(
            'data', (chunk) => {
                    stream.pipe(res)
            }
        )

        stream.on('error', (error) => { //captura error
            console.log('Error al cargar archivo' +error)
        })
    }
)

server.listen(3000)