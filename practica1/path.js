const path = require('path')
// RUTA WINDOWS: C:\\users\\path\\file
// RUTA LINUX: /home/alex/path/file

console.log(path.sep)
console.log(path.join("/public","dist","/style", "archivo.css"))

const filePath = path.join("/public","dist","/style", "archivo.css")

console.log(path.basename(filePath)) //devuelve archivo

console.log(path.dirname(filePath)) //devuelve ruta

console.log(path.parse(filePath)) //devuelve objeto con propiedades

console.log(path.resolve("dist")) //resuelve desde raiz
