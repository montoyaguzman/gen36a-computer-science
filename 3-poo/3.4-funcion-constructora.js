function createSuperhero(superpoder, secretName, alias) {

    console.log('this: ', this)
    this.superpoder = superpoder; // spiderman.superpoder = 'superfuerza'
    this.secretName = secretName;
    this.alias = alias;


}

const spiderman = new createSuperhero('superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperhero('raios laseer', 'tony stark', 'iron man');

console.log('new y this en funcion constructora');
console.log('spiderman: ', spiderman);
console.log('ironMan: ', ironMan);

/**
 * this: el objeto que llama a la funcion
 * new: genera un objeto automaticamente de la funcion que aparece enfrente
 */

// const arr = []
// arr.push(9)

// const num = 10
// num.toString()