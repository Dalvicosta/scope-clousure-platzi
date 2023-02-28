function greeting() {
    let username = 'Oscar';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);// definicion del valor [Function: displayUserName]
console.log(g());//Ejecutamos, nos retorna el valor y el contexto.

