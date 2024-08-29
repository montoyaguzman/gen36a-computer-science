# Computer science

Este documento es una **sintesis de la kata** (clases, campus, tareas y proyectos) **más temas extra** (estrechamente relacionados) para brindar la **posibilidad** al estudiante **de ampliar** sus **conocimientos**. Para su mejor aprovechamiento se recomienda **leerlo como guía** y **ampliar sus notas** con base en **investigación, autoestudio** y **ejercicios**.

**Estructura de carpetas sugerida**

- kata-1

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana
- kata-2

  - g99-nombre-de-la-kata-1
  - g99-nombre-de-la-kata-1-juanito-banana

## Temario

1. [Introducción a la logica de programación](#introducción-a-la-logica-de-programación)
2. [EcmaScript](#ecmascript)
3. [Prototype y POO](#prototype-y-poo)
4. [Proyecto del módulo](#proyecto-del-módulo)
5. [Presentaciones](#presentaciones)
6. [Glosario](#glosario)
7. [Informacion y recursos extra](#informacion-y-recursos-extra)

## Introducción a la logica de programación

### Lógica

Es un razonamiento en que las ideas se desarrollan en forma coherente, sin contradicciones (entre ellas) y explicitamente.

### **Fases del análisis de un problema**

1. Análisis (entradas, proceso, salidas).
2. Diseño de un algoritmo.
3. Transformación del algoritmo en código.
4. Ejecución y validación.
5. Pruebas de aceptación.

**Requerimientos**

Un requerimiento es la funcionalidad que necesita tener un proyecto, existen de dos tipos:

* **Requerimientos funcionales:** Son aquellos requerimientos que tienen que ver con la solucion del usuario. Aportan valor funcional al usuario.
* **Requerimientos no funcionales:** Son caracteristicas que un sistema necesita para funcionar adecuadamente pero que no aportan valor operativo al usuario.

#### Algoritmos

Un algoritmo es un conjunto de acciones que especifican la secuencia de operaciones realizadas, en orden, para resolver un problema.

**Partes de un algoritmo**

* **Entrada:** Se trata del conjunto de datos que el algoritmo necesita como insumo para procesar.
* **Proceso:** Son los pasos necesarios aplicados por el algoritmo a la entrada recibida para poder llegar a una salida o resolución del problema.
* **Salida:** Es el resultado producido por el algoritmo a partir del procesamiento de la entrada una vez terminada la ejecución del proceso.

**Representaciones de un algoritmo**

* **Lenguaje natural:** Es la forma tradicional de comunicación utilizada por los seres humanos.
* **Diagrama de flujo:** Es una representacion gráfica del algoritmo de un problema.
* **Pseudocodigo:** Es una forma de expresar los distintos pasos que va a realizar un programa de la forma más parecida a un lenguaje de programación (utlizando palabras clave). El pseudocodigo no puede ejecutarse directamente un ordenador ya que solo es una representacion para facilitar la solucion.
* **Código:** Es la solución de un problema en algun lenguaje de programación.

Expresar un problema con nuestras propias palabras y sin usar tecnicismos de desarrollo. Es el lenguaje con el que nos expresamos comúnmente.

#### Diagrama de flujo

Forma gráfica de representar un algoritmo. Tambien es util para documentar procesos de un sistema.

##### Símbologia

* Inicio (óvalo).
* Entrada / Lectura (paralelogramo).
* Proceso (rectángulo).
* Descisión (rombo).
* Documento / Impresión.
* Fin (óvalo).
* Conectores (circulos o líneas).
* Flechas.

![1694131636119](image/README/1694131636119.png)

Todos los diagramas de Ingeniería de software se basan en [UML](https://drive.google.com/file/d/0B_mAPkMcdtUsMHgtUWZJMWZvYms/view?resourcekey=0-ITkYE1KVVbh_tCutVSL_ew) (Unified Model Language).

#### Pseudocódigo

Lenguaje hibrido entre el natural y el codigo de programacion, utiliza ciertas convenciones de programacion pero sigue siendo entendible para las personas.

* "INICIO".
* “Leer a”.
* “Si… entonces…”
* “Si no … entonces…”
* “Mientras…”
* “Si y sólo si --- entonces”
* “Imprimir”.
* “FIN”.

#### Código

Resolver el problema mediante la sintáxis de algún lenguaje de programación.

#### Prueba de escritorio

Es probar mediante valores reales si nuestro algoritmo soluciona correctamente el problema. Generalmente se genera una tabla donde ponemos la formula de nuestro algoritmo y vamos siguiendo el flujo y reemplanzando por valores reales, de esta manera se valida si el algoritmo que programamos/vamos a programar resuelve el problema.

A nivel de código JS usted puede utilizar la keyword [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) y las herramientas del navegador.

## ECMAScript

Es una especificación (estándar) que la empresa del mismo nombre definió para JavaScript en el año 2015 (ES6). Si bien ecma existe desde 1996, ES6 es un punto de quiebre en la historia.

### Lista de funcionalidades ES6 - ES13

Cabe destacar que las funcionalidades listadas a continuación fueron seleccionadas por el [autor](https://www.linkedin.com/in/jose-montoya-guzman-66aa32129/) de este readme.md y es una opinión de las features de las versiones de ecma que realmente se utilizan en la industria, con base en su propia experiencia y que pueden encontrar más en la [documentación oficial](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) de ecmascript.

* Let y const.
* Template literals / Template strings.
* Arrow functions (short and long form).
* For in y for of.
* Módulos.
* Default parameters.
* Spread operator
* Rest operator.
* Destructuring.
* Map y Set.
* Math
* Numbers.
* Class.
* call, bind y apply.
* RegExp
* Promises
* Async y await.
* Symbol.
* String
  * charAt.
  * concat.
  * indexOf.
  * replace y replaceAll.
  * trim, substr y substring.
  * includes, startsWith y endsWith.
* Object
  * create y assign.
  * keys, values y entries.
  * seal y freeze.
* Array
  * forEach y map.
  * push, pop, splice y slice.
  * indexOf, includes, find, findIndex, filter, reduce, reverse.
* Valor por defecto de una variable ||.
* Encadenamiento opcional ?.
* Nullish operator ??.
* Guard operator &&.
* Delete, typeof e instanceof.
* Destructuring.

#### Bonus JS

Las siguientes son caracteristicas de cualquier lenguaje de programación y a continuación se explican como se usan en JS. No necesariamente son parte de ECMA pero si son conocimientos indispensables para un desarrollador, especialmente uno de JS.

* Tipos de datos.
* Operadores y tablas de verdad.
* Sentencias condicionales.
* Ciclos y concepto de iterador.
* Objetos.
* Arrays.
* Funciones o métodos.
* Uso correcto de var, let y const.
* Destructuring.
* Tipos de datos especiales de js (null, undefined, infinity, NaN).
* ¿Qué es el valor por defecto de una variable y cuáles son para cada tipo de dato?.
* Tipos de funciones en JS.
* Diferencia entre paso por referencia y valor.
* Manejo de excepciones (Try, catch).
* Tipos de salida de una función (return y void/undefined).
* Hoisting.
* Localstorage.
* WebApi (Eventos y el DOM).
* Event Loop.

Además de los temas visto y con el fin de leer algo más completo se sugiere revisar [eloquent JS](https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf).

## Prototype y POO

### Intro

**Tipos de datos en programación (agnósticos del lenguaje)**

* Boolean.
* String.
* Array.
* Object.
* Number.
* Double (Decimal Number).

**Fuerte y debilmente tipado**

```
// debilmente tipado JS (scope varName = value;)
let numero = 10
let numero2 = 99.7
numero = "este es numero"
```

```
// fuertemente tipado Java (dataType varName = value;)
int numero = 10;
double numero2 = 99.7
numero = "este es numero" // error
```

**Jerga de objetos**

Existen conceptos en programación que son casi lo mismo, pero que conmúnmente se usan para referirse a lo mismo.

clase = prototipo = plantilla = modelo
objeto = objeto concreto = instancia = miembro = variable miembro = variable del tipo de claseX

**Objectos JS y JSON**

```
// objeto js => atributo y valor
const person = {
    name: "jose m"
}

// json => key: value
{
    "person": {
        "name": "jose m"
    }
}
```

### Prototype

Los **prototipos** son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. Funcionan para **proporcionar mecanismos de herencia.**

Los objetos pueden tener un  **objeto prototipo** , el cual actúa como un objeto plantilla que hereda métodos y propiedades.

**Cadena de Prototipos**

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la **cadena de prototipos**.

### POO

Es un paradigma de programación centrado en:

* Plantillas base (clases). => **Auto**
* Objetos, son elementos concretos de una clase.=> **mazda, tsuru**
* Atributos/Propiedades: Son las caracteristicas de los objetos. => **color, dimensiones, modelo**.
* Métodos/Funciones: Son las acciones puede realizar un objeto. => arranca(), frena().

#### Formas de crear objetos en JS

##### Literal objects.

```
const pikachu = {
  name: 'pikachu',
  height: 90
  camina: function() {
    console.log('C-A-M-I-N-A-R');
  }
}
```

##### Funcion factory

```
function createPokemon(name, height) {  
  const auto = {  
    name: name,  
    height: height,  
  }
  return auto;  
}  
const pikachu = createPokemon('pikachu', 90);
```

##### Prototype.

```
function Pokemon(name, height) {
  const auto = {
    name: name,
    height: height,
  }
  return auto;
}
const pikachu = createPokemon('pikachu', 90);function Pokemon(name, height) {
    this.name = name;
    this.height = height;
}

const pikachu = new Pokemon('pikachu', 90);
console.log(pikachu.height);

Pokemon.prototype.camina = function() {
      console.log('C-A-M-I-N-A-R')
};
pikachu.camina()
```

##### Funcion constructora con new y this.

```
function createPokemon(name, height) {
    this.name: name,
    this.height: height,
}
const pikachu = new createPokemon('pikachu', 90);
```

##### Sugar Syntaxis.

```
class Poke {
    constructor(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
  
    attack(bonus) { 
        console.log(`${this.power}`, bonus);
    }

    alive(points) { 
        if (points > 1) {
            return true;
        }
        return false;
    }
}

class FlightPoke extends Poke {
    constructor(name, type, power, alas) {
        super(name, type, power);
        this.alas = alas;
    }
    flight() {
        console.log('yo vuelo');
    }
}

class WaterPoke extends Poke {
    constructor(name, type, power, aletas) {
        super(name, type, power);
        this.aletas = aletas;
    }
    swim() {
        console.log('yo nado');
    }
}

const squirtle = new WaterPoke('Squirtle', 'Water', 'pulse water', 'tengo 4 aletas');
const pidgey = new FlightPoke('Pidgey', 'Flight', 'aerial ace', 'tengo 2 alas');

console.log(squirtle)
squirtle.attack(99);
squirtle.swim();
pidgey.attack(10);
pidgey.flight();
// squirtle.flight();
// La linea anterior produce un error porque squirtle no tiene ese metodo
```

**Nota:** Recuerde la exitencia de Object.create y { ...props } para generar nuevos objetos a partir de otros sin mantener la referencia.

### Proyecto del módulo

Ir a la carpeta [7-proyecto](./7-proyecto/instrucciones.md)

### Presentaciones

Se encuentran en la  [carpeta assets](./assets/) de este mismo repo.

### Glosario

El glosario se encuentra ubicado en el siguiente [repo](https://github.com/montoyaguzman/gloasario-techie)

### Informacion y recursos extra

1. [¿Qué es la programación orientada a objetos?](https://www.youtube.com/watch?v=DlphYPc_HKk)
2. [Object-oriented Programming in JavaScript: Made Super Simple](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=3305s).
3. [OOP in JS (De prototypes a clases)](https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/).
4. [Creación de Objetos JavaScript](https://developer.mozilla.org/es/docs/conflicting/Learn/JavaScript/Objects/Classes_in_JavaScript).
5. [Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes).
6. [Herencia y cadena de prototypos](https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
7. [Curso de ES6](https://www.udemy.com/course/ecmascript-6-es2015/)
8. [ES6 en 1 hora](https://www.youtube.com/watch?v=NCwa_xi0Uuc).
