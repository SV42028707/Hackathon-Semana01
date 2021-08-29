// // EJERCICIO 1
// let name = "John";
// let admin = name;
// alert(admin);

// // EJERCICIO 2
// let earth;
// let username;

// // EJERCICIO 3

// // CORRECTO
// const birthday = "18.04.1982";
// const age = someCode(birthday);

// //ICNORRECTO
// const BIRTHDAY = "18.04.1982";
// const AGE = someCode(BIRTHDAY);
// //RPTA: Es incorrecto utilizar mayúsculas para las variables, debemos utilizar las diversas covecciones de nombres; CamelCase, snake_case, kebab-case y Train-Case

// EJERCICIO 4

// let name = "Ilya";

//INCORRECTO
// alert(`hello ${1}`);

//INCORRECTO
// alert(`hello ${"name"}`);

// //CORRECTO
// alert(`hello ${name}`);

// EJERCICIO 5
// let user = {
//   name: "John",
//   surname: "Smith",
// };

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);

// EJERCICIO 6
// let schedule = {};

// function isEmpty(obj) {
//   return !Object.keys(obj).length;
// }

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// // EJERCICIO 7
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sumTotal = 0;

// for (key in salaries) {
//   sumTotal += salaries[key];
// }

// console.log(sumTotal);
// EJERCICIO 8

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
