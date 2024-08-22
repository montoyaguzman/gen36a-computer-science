class Persona {

    constructor(name, age, nationality, work, isIntrovertido) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.work = work;
        this.isIntrovertido = isIntrovertido;
    }

    eat() {
        console.log('eat...')
    }

}

class Panadero extends Persona {
    constructor(name, age, nationality, work, isIntrovertido, isComerciante, hasEspatula) {
        super(name, age, nationality, work, isIntrovertido);
        console.log('this...', this);
        this.isComerciante = isComerciante;
        this.hasEspatula = hasEspatula;
    }
    cook() {
        console.log('cook...');
    }
}

class Superhero extends Persona {
    constructor(name, age, nationality, work, isIntrovertido, superpoder, secretName, alias) {
        super(name, age, nationality, work, isIntrovertido);
        this.superpoder = superpoder;
        this.secretName = secretName;
        this.alias = alias;
    }
    fly() {
        console.log('fly...');
    }
}

class Car {
    constructor(model) {
        this.model = model
    }
}

const tintan = new Panadero('tintan', 25, 'mexicana', 'actor', false, true, true);
const spiderman = new Superhero('peter parker', 22, 'estadunidense', 'clarin', true, 'superfuerza', 'peter parker', 'spiderman');
const ironMan = new Superhero('tony stark', 45, 'estadunidense', '100tifiko', false, 'raios laseer', 'tony stark', 'iron man');

console.log('CLASS');
console.log('spiderman: ', spiderman);
console.log('ironMan: ', ironMan);
console.log('tintan: ', tintan);




