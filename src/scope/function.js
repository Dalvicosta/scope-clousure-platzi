function greeting(){
     let userName = 'Ana'; //variable local
     console.log(userName)

     if (userName === 'Ana'){
        console.log(`Hello ${userName}`)
     }

} //Todo lo que se encuentre dentro de aqui seran variables locales de funcion.

greeting();

console.log(userName); // Aparece variable no declarada