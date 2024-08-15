// TIPADO FUERTE VE DEBIL

// TIPADO FUERTE: Que cada que definimos una variable tenemos que decir de que tipo de dato
// JAVA O PYTHON
// int numero = 10;
// String senseiName = "montoya";
// numero = ['apple', 'mangoo'] // error del tipado

// TIPADO DEBIL: Es que el tipo de dato de cada variable se autointerpreta
// JAVASCRIPT
// let numero = 10;
// let senseiName = 'montoya';
// numero = ['apple', 'mangoo'] // evitar
// numero = 100
// numero 900
// numero = -100

// PASO VALOR: Una variable esta asociada a un valor y si se crean nuevas variables a partir de la 
// primera, son dos variables independientes con ese valor.
// pasa con valores primitivos (int, double/float, boolean, char, string)
let baseName = 'SIN NOMBRE';
let workerName = baseName;
workerName = 'montoya';

// PASO REFERENCIA: Las variables se asocian al mismo valor y si una cambia, la otra tambien
// pasa con valores complejos (arrays, objetos)
let fruits = ['apple', 'mangoo'];
let super = fruits;