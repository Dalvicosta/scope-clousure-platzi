function fruits() {
    if (true) {
        var fruit1 = "Apple";//function scope ( al usar var se llama como si estuviera fuera del bloque o funcion)
        let fruit2 = 'Kiwi';//block scope
        const fruit3 = "Banana";//block scope

        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);// Se va a llamar
    // console.log(fruit2);// No se va a llamar
    // console.log(fruit3);//No se va a llamar
}// un bloque es casi cualquier cosa que este dentro de {}

fruits();