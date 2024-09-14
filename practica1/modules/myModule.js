//const urlWeb = "google.com"
//module.exports = urlWeb
//console.log(module)

const urlWeb = "google.com"
const myNumber = 123
const myArray = ["nombres", "escuelas", "Direcciones"]
const myObj = {
    propiedad: "casa",
    valor: 123
}

//const group = {
//    urlWeb: urlWeb,
//    myArray: myArray,
//    myNumber: myNumber,
//    myObj: myObj
//}

//module.exports = {
//    urlWeb: urlWeb,
//    myArray: myArray,
//    myNumber: myNumber,
//    myObj: myObj
//}

module.exports = {
    urlWeb,
    myArray,
    myNumber,
}

module.exports.objeto = myObj
module.exports.number = myNumber