const { error } = require("console")
const fs = require("fs")

//const first = fs.readFileSync('./data/first.txt') //devulve buffer
//const first = fs.readFileSync('./data/first.txt', 'utf-8') //devulve texto codificado
//const second = fs.readFileSync('./data/second.txt') 
//
//console.log(first)
//console.log(second.toString())
//
//const container = "contenido del archivo por variable"
//
//fs.writeFileSync('./data/fourth.txt', container) //crea o reemplaza
//
//fs.writeFileSync('./data/fourth.txt', " nuevo texto en archivo existente",
//    { flag: 'a'}
//) //agregar texto
//
//

//METODOS ASINCRONOS, POR LO GENERAL TRABAJAN DE ESA FORMA
//los sincronos terminan con Sync en el nomnbre

//la ejecucion de la funcion se realizará al terminar de ejecutar lo asincrono
//fs.readFile('./data/first.txt', function(error, data) {
//    console.log("termino")
//    console.log(error)
//    console.log(data.toString())
//})

fs.readFile('./data/first.txt', 'utf8',(error, data) => {
    console.log("termino")
    if(error){
        console.log(error)
    }
    
    console.log(data)

    fs.readFile('./data/second.txt', 'utf8',(error, data) => {
        console.log("termino")
        if(error){
            console.log(error)
        }
        
        console.log(data)
        
    })
    
})
