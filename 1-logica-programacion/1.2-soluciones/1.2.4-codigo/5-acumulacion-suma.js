let numbers = [1, 4, 7, 9, 3, 3, 5, 90];
let total = 0;

// for (inicio; condicion (repetir ciclo); razonCambio)
// for (let i = 0; i < numbers.length; i++) {
//     debugger;
//     if (i === 0) {
//         total = total + numbers[0];
//     }
//     if (i % 3 !== 0) {
//         total = total + numbers[i];
//         // console.log(numbers[i]);
//     }
// }


let i = 0; // inicio
while (i < numbers.length) { // condicion
    if (i === 0) {
        total = total + numbers[0];
    }
    if (i % 3 !== 0) {
        total = total + numbers[i];
        // console.log(numbers[i]);
    }
    i++; // razonDeCambio
}

console.log('total: ', total);