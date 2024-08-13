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
    students: ['gabriel', 'luis']
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
    console.log(fruits[i].name);
}

// ES6: FOR OF
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"


// ES6: FOR IN
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"


// Con un ciclo de ES5 (for y while) y uno de ES6 (for in o el for of)
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"