/**
 * Var es la forma mas antigua de declarar variables en JS
 * Tiene un alcance global
 * Puede ser redeclara o reasginada
 */

var nombre = "Juan";
console.log("nombre inicio: ", nombre); // juan

if (true) {
    var nombre = "jose";
    console.log("nombre en if: ", nombre); // jose
}

console.log("nombre final: ", nombre); // jose


/**
 * let 
 * Introdujo ES6
 * Alcance es de bloque (scope se limita {})
 * Limitar alcance y usarlo para variables que cambien el flujo del programa
 */

let age = 20;
console.log("age inicio: ", age); // 20

if (true) {
    let age = 30;
    console.log("age en if: ", age); // 30
}

console.log("age final: ", age); // 20

/**
 * const
 * Introdujo ES6
 * Alcance es de bloque (scope se limita {})
 * Limitar alcance y usarlo para valor que no necesitan cambiar (ser reasignados)
 * No se pueden declarar e inicializar por separado
 */

const PESOMXN = "mxn";
const PI = 3.1416;
const days = ['monday', 'tuesday', 'friday'];
const student = {
    name: 'jose'
}

console.log(PESOMXN, PI, days);

// PESOMXN = 'USD'; // TypeError: Assignment to constant variable. at 1.let-const.js:48:9 (anonymous) @ 1.let-const.js:48Understand this error
// PI = 10; // same error
// days = ['saturday'];
// student = { name: 'juan' }
days.push('wednesday');

console.log(days);

// const USD;
/// USD = "usd";
// Uncaught SyntaxError: Missing initializer in const declaration (at 1.let-const.js:60:7)