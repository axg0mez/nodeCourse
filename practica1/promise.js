//Codigo async utiliza promesas
const { readFile } = require("fs");
const {promisify} = require('util')


//funcion que retorna una promesa
//ESTO SE LO REEMPLAZA POR FUNCION UTILITARIA QUE CONVIERTE EL CALLBACK EN UNA PROMESA
//const getText = (pathFile) => {
//  return new Promise(function (resolve, reject) {
//    readFile(pathFile, "utf-8", (err, data) => {
//      if (err) {
//        reject(err);
//      }
//      resolve(data);
//    });
//  });
//};
//reemplazo por util
const readFilePromise = promisify(readFile)


//con las promesas podemos utilizar las funciones post pejecucion then y catch
//Codigo antiguo
//getText('./practica1/data/first.txt')
//    .then((result) => console.log(result))
//    .then(() =>getText('./practica1/data/second.txt')) //se debe escribir como funcion
//    .then((result) => console.log(result))
//    .catch(error => console.log(error)) //si ocurre error en sus ejecuciones ejecuta lo de este bloque

//Codigo nuevo con async y await
//await especifica que el codigo a ajecutar es asincrono y necesita estar dentro de una funcion marcada con async
async function read() {
  try {
    const result = await readFilePromise("./practica1/data/first.txt", 'utf-8');
    const result2 = await readFilePromise("./practica1/data/second.txt", 'utf-8');
    const result3 = await readFilePromise("./practica1/data/third.txt", 'utf-8');
    const result4 = await readFilePromise("./practica1/data/fourth.txt", 'utf-8');

    //throw new Error('Error controlado pruebas') //ERROR CONTROLADO
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read()