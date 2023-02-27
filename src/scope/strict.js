'use strict'; //Con esto evitaremos que pi sea var pi;

pi = 3.1416;
console.log(pi); //Asignamos el valor sin declararlo, tiene que ver hoisting 

//El pi de arriba es interpretado como var pi; //undefined, por lo que para evitar eso:


function myFunction(){
    'use strict';
    return pi = 3.1416;
}// aqui se utiliza dentro de una funcion para ver el efecto que tiene dentro de ella. hace lo mismo que en la parte de arriba.

console.log(myFunction())// pi is not defined