let usenarm = "alex";
let age = 30;
let hastHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "luis",
  lastname: "gomez",
};
const PI = 3.1234;

console.log(usenarm);
console.log(age);
console.log(hastHobbies);
console.log(points);
console.log(user);
console.log(PI);

if (age >= 18) {
  console.log("adulto");
} else if (age >= 13) {
  console.log("joven");
} else {
  console.log("niño");
}

const names = ["mirian", "italo", "luis"];
for (let I = 0; I < names.length; I++) {
  console.log(names[I]);
}

function showParams(param) {
  console.log(param);
}

showParams("hola 2");
showParams("mundo 2");
