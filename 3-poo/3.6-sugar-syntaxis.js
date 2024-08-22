class createPersona {

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

class createPanadero extends createPersona {
    constructor(name, age, nationality, work, isIntrovertido, isComerciante, hasEspatula) {
        super(name, age, nationality, work, isIntrovertido);
        this.isComerciante = isComerciante;
        this.hasEspatula = hasEspatula;
    }
    cook() {
        console.log('cook...');
    }
}

class createSuperhero extends createPersona {
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

const tintan = new createPanadero('tintan', 25, 'mexicana', 'actor', false, true, true);
const spiderman = new createSuperhero('peter parker', 22, 'estadunidense', 'clarin', true, 'superfuerza', 'peter parker', 'spiderman');
const ironMan = new createSuperhero('tony stark', 45, 'estadunidense', '100tifiko', false, 'raios laseer', 'tony stark', 'iron man');

console.log('CLASS');
console.log('spiderman: ', spiderman);
console.log('ironMan: ', ironMan);
console.log('tintan: ', tintan);




