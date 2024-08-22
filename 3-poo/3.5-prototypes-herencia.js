function createPersona(name, age, nationality, work, isIntrovertido) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.work = work;
    this.isIntrovertido = isIntrovertido;
    this.eat = () => {
        console.log('eat...')
    }
}

function createPanadero(name, age, nationality, work, isIntrovertido, isComerciante, hasEspatula) {
    // linea de herencia
    this.__proto__ = new createPersona(name, age, nationality, work, isIntrovertido);
    this.isComerciante = isComerciante;
    this.hasEspatula = hasEspatula;
    this.cook = function () {
        console.log('cook...');
    }
}

function createSuperhero(name, age, nationality, work, isIntrovertido, superpoder, secretName, alias) {
    // linea de herencia
    this.__proto__ = new createPersona(name, age, nationality, work, isIntrovertido);
    this.superpoder = superpoder;
    this.secretName = secretName;
    this.alias = alias;
    this.fly = function () {
        console.log('fly...');
    }
}

const tintan = new createPanadero('tintan', 25, 'mexicana', 'actor', false, true, true);
const spiderman = new createSuperhero('peter parker', 22, 'estadunidense', 'clarin', true, 'superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperhero('tony stark', 45, 'estadunidense', '100tifiko', false, 'raios laseer', 'tony stark', 'iron man');

console.log('PROTO');
console.log('spiderman: ', spiderman);
console.log('ironMan: ', ironMan);
console.log('tintan: ', tintan);