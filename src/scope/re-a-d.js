var firstName; //Declarada, undefined
firstName = "Oscar"; //Asignado un valor, Oscar
console.log(firstName);

var lastName = 'David'; //declarar /asignar
lastName = 'Ana'; //Reasignado un valor, Ana. No Oscar
console.log(lastName);

var secondName = 'David';//declarando / asignando
var secondName = 'Ana';
console.log(secondName);// Aparece Ana ya al ser la ultima referencia en memoria.

// let

let fruit = 'Apple'// declara y asigna
fruit = 'Kiwi'; //reasigna
// let fruit = 'Apple'; No se puede redeclarar
console.log(fruit);

//const 
const animal = 'Dog'; //declara y asigna
animal = 'cat'; //reasignado, No deja que reasigne .
// const animal = 'Snake'; No se puede redeclarar.
console.log(animal);



// Aqui se aplica la inmutabilidad y el const puede ser cambiad0.
const vehicles = [];
vehicles.push('dog');
console.log(vehicles)

vehicles.pop();
console.log(vehicles);