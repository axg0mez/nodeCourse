const http = require('http')

const server = http.createServer(function(request, response){

    if(request.url === "/about"){
        response.write('Informacion pagina')
    }else if(request.url === "/"){
        response.write('Welcome')
    }else{
        //response.write('<h1>NOT FOUND</h1>')
        response.write(`
            <h1>NOT FOUND</h1>
            <a href="/">volver</a>
        `)
    }
    
    response.end()
})

server.listen(3000)

console.log("Escuchando server")
