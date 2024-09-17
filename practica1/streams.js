//crear archivo
//const {writeFile} = require('fs/promises')
//
//const createBigFile = async () => {
//    await writeFile('./practica1/data/bigFile.txt', 'hola alex gomez pruebas'.repeat(10000))
//}
//
//createBigFile()


//lectura por archivos

const {createReadStream} = require('fs')

const stream = createReadStream('./practica1/data/bigFile.txt',{
    encoding: 'utf-8' //se pueden cambiar varias propiedades, como por ejemplo el tamnio del buffer
})

stream.on(
    'data', (chunk) => {
        console.log(chunk)
    }
)

stream.on('end', () => {
    console.log('ha terminado de leer el archivo')
})

stream.on('error', (error) => { //captura error
    console.log('Error al cargar archivo' +error)
})