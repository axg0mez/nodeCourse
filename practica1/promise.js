//Codigo async utiliza promesas
const { readFile } = require("fs");

//funcion que retorna una promesa
const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

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
    const result = await getText("./practica1/data/first.txt");
    const result2 = await getText("./practica1/data/second.txt");
    const result3 = await getText("./practica1/data/third.txt");
    const result4 = await getText("./practica1/data/fourth.txt");

    throw new Error('Error controlado pruebas') //ERROR CONTROLADO
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read()