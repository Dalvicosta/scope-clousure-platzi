    const myGlobal = 0;

    function myFunction() { //funcion externa
        const  myNumber = 1;
        console.log(myGlobal);

        function parent(){ //funcion interna
            const inner = 2;
            console.log(myNumber, myGlobal);

            function child() {
                console.log(inner, myNumber, myGlobal);
            }

            return child();
        }

        return parent();
    }

    myFunction(); //lexico significa que la accesibilidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos aninados(funciones).




    function sumWithClosure(firstNum = 0) {
        const number1 = firstNum;
        return function sum1(secondNum = 0) {
          const number2 = secondNum
          return number1 + number2;
          if (secondNum = 0) {
            return firstNum 
          } else {
            return number1 + number2;
          }
        }
      }