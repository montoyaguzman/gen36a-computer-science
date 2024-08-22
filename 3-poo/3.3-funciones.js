function createSuperhero(superpoder, secretName, alias) {
    const superhero = {
        superpoder: superpoder,
        secretName: secretName,
        alias: alias
    };
    return superhero;
}

const spiderman = createSuperhero('superfuerza', 'peter parker', 'spiderman');
const ironMan = createSuperhero('raios laseer', 'tony stark', 'iron man');

console.log('funcion que crea objetos');
console.log('spiderman: ', spiderman);
console.log('ironMan: ', ironMan);

/**
 * Podriamos crear una funcion que arme objetos a partir de los valores
 * de los parametros que recibe y de esta manera estamos simulando una 
 * plantilla o clase
 * Se agrega la reutilizacion y tener el control de la estrucura de los
 * objetos del mismo tipo
 */