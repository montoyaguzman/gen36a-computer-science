const array = [100, 90, 110, 101, 12, 70];

// pasando como param funcion anonima
// array.forEach(function() {

// });


// forEach: Imprimir todos los numeros del arreglo
// Se usa para recorrer un arreglo de inicio a fin y no retorna
console.log(` ==== FOR EACH ====`);


const newForEachArray = array.forEach((element, i) => {
    // array.forEach((numero, posicionDelNumero) => {
    // arr [0] = 100
    // arr [1] = 90
    console.log(`array [${i}] = ${element}`);
    if (element > 100) {
        return element;
    }
});


// map: Imprimir todos los numeros del arreglo
// Se usa para recorrer un arreglo de inicio a fin PERO SI RETORNA CADA VALOR
console.log(` ==== MAP ====`);
const newMapArray = array.map((element, i) => {
    console.log(`array [${i}] = ${element}`);
    if (element > 100) {
        return element;
    }
});

console.log(`for each result: `, newForEachArray);
console.log(`map result: `, newMapArray);