function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

console.log(sum(9, 11));
const suma2 = sum(80, 20);
console.log(suma2);

// function sayHello(name) {
//     console.log(`Hola ${name} !`);
// }

const sayHello = (name) => {
    console.log(`Hola ${name} !`);
};

let name = 'jose';
sayHello('Ptolomeo');
sayHello(name);


// FORMAS

// 1. Completa

const fn = (param1, param2) => {
    // sentences
    // sentences
    // sentences
    // sentences
    // sentences
    // sentences
}

// 2. Retorno implicito
const fn2 = (n1, n2) => n1 + n2

// 3. Sin parametros
const fn3 = () => {
    // sentences
    // sentences
    // sentences
    // sentences
    // sentences
    // sentences
}

// 4. Tener 1 parametro y un retorno implicito
// recibir name, decir "Hola nombre"
const sayHellow2 = name => `Hola ${name}`
console.log(sayHellow2('Aurelio'));