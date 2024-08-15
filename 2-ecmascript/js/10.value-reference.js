// PASO VALOR: Una variable esta asociada a un valor y si se crean nuevas variables a partir de la 
// primera, son dos variables independientes con ese valor.
// pasa con valores primitivos (int, double/float, boolean, char, string)
let baseName = 'SIN NOMBRE';
let workerName = baseName;
console.log(`baseName: ${baseName}`);
console.log(`workerName: ${workerName}`);

// reasginacion
workerName = 'montoya';
baseName = 'NOMBRE NO INFORMADO';

console.log(`baseName: ${baseName}`); // NOMBRE NO INFORMADO
console.log(`workerName: ${workerName}`); // montoya


console.log(`================================`)

// PASO REFERENCIA: Las variables se asocian al mismo valor y si una cambia, la otra tambien
// pasa con valores complejos (arrays, objetos)
let fruits = ['apple', 'mangoo'];
let sensei = { name: 'montoya', age: 30 };

console.log('fruits', fruits);
console.log('sensei', sensei);

// let mySuper = fruits;
// mySuper[0] = 'strawberry';
// mySuper.push('orange');
let mySuper = [...fruits, 'orange'];
mySuper[0] = 'strawberry';
console.log('mySuper', mySuper);
console.log('fruits', fruits);

// let newSensei = sensei; // error por referencia
// newSensei.name = 'daniel'; // error por referencia
let newSensei = { ...sensei, name: 'daniel' };
console.log('sensei', sensei);
console.log('newSensei', newSensei);