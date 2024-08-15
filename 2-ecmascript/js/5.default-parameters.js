const sayHello = (name = 'SIN NOMBRE', age = 18) => {
    console.log(`Hola ${name} y tiene ${age}`);
};

const studentName = 'juanito';
sayHello(studentName);

let senseiName;
// many sentence for get the variable senseiName
sayHello(senseiName, 30);