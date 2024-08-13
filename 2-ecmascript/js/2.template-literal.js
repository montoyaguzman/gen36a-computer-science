// concatenar: unir variables o texto

let name = 'jose';
let app = 'montoya';
let age = 30;
let students = ['raul', 'dulce', 'marcos'];

console.log(name, age, students); // jose 30 students
console.log(name + ' ' + age + students); // jose 30 students

// template literals
console.log(`${name} - ${app} => ${age}`); // jose - montoya => 30
console.log(`nombre completo: ${name} ${app}`); // nombre completo: jose montoya
// console.log(); // nombre completo: jose montoya guzman y tengo 30 años