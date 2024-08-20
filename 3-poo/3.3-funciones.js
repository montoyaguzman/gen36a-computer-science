function createSuperhero(superpoder, secretName, alias) {
    const superhero = {
        superpoder: superpoder,
        secretName: secretName,
        alias: alias
    };
    return superhero;
}


createSuperhero('superfuerza', 'peter parker', 'spiderman');
createSuperHero('raios laseer', 'tony stark', 'iron man');

/**
 * Podriamos crear una funcion que arme objetos a partir de los valores
 * de los parametros que recibe y de esta manera estamos simulando una 
 * plantilla o clase
 * Se agrega la reutilizacion y tener el control de la estrucura de los
 * objetos del mismo tipo
 */