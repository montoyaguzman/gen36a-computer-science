// arrays: Un conjunto de datos o una lista de cosas.
// objetos: Son la agrupacion de caracteristicas de la misma cosa.

const colors = [
    'red',
    'blue',
    'yellow'
];
// colors[1] // blue

const senseiMontoya = {
    name: 'jose',
    students: ['gabriel', 'luis'],
    age: 30
    // prop: value
}

// senseiMontoya.name // jose
// luis? senseiMontoya.students[1]

const fruits = [
    { name: 'apple', price: 22, isStock: true, temporada: 'spring', stores: ['buelmer', 'badiga eurrira', 'chadreui'] },
    { name: 'mangoo', price: 32, isStock: false, temporada: 'summer', stores: ['buelmer', 'chadreui'] },
    { name: 'strawberry', price: 50, isStock: true, temporada: 'spring', stores: ['buelmer'] },
    { name: 'grape', price: 20, isStock: true, temporada: 'spring', stores: ['badiga eurrira', 'chadreui'] },
];

// ES5
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i]; // iterador arreglo[pos]

    // operador ternario
    // condicion ? resultadoCondicionTrue : resultadoCondicionFalse
    const finalText = fruit.isStock ? 'está en stock' : 'no está en stock'

    // let finalText = '';
    // if (fruit.isStock) {
    //     finalText = 'está en stock';
    // } else {
    //     finalText = 'no está en stock';
    // }
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${finalText}`);

}

// ES6: FOR OF => Es para iterar arreglos
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"
// 
for (const fruit of fruits) {
    console.log(fruit);
    const finalText = fruit.isStock ? 'está en stock' : 'no está en stock'
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${finalText}`);
}

// ES6: FOR IN => No se puede hacer ya que for in es para objetos
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"
for (const prop in senseiMontoya) {
    // senseiMontoya.name
    // senseiMontoya.age
    console.log(senseiMontoya[prop]);
    // fruits[fruit]
}


// Con un ciclo de ES5 (for y while) y uno de ES6 (for in o el for of)
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"

// for => programacion imperativa
// for of y for in => programacion declrativa


// ES6: FOR IN
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
for (let fruit of fruits) {
    // Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
    const message = fruit.isStock ? 'si' : 'no'
    let storesMessage = '';
    for (let prop in fruit) {
        if (prop === 'stores') {
            // console.log(fruit[prop]); // stores: ['buelmer', 'badiga eurrira', 'chadreui'] => 'buelmer', 'badiga eurrira', 'chadreui'
            for (let store of fruit[prop]) {
                storesMessage += `${store}`;
                //  storesMessage += fruit[prop].length - 1 === i ? '.' : ',' como obtener la i?????
            }
        }
    }
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${message} esta en stock y lo venden en ${storesMessage}`);
}