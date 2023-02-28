// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5); Esta logica no funciono para hacer una pagina que guarde los ahorros que se hacen


function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//Caso practico de una alcancia con una closure


function createPetList() {
    let pets = [];

    return function addPets(pet){
        if (pet){
            pets.push(pet);
            console.log(pets);
        }
        return pets
    }
  }

  const myPetList = createPetList();


  myPetList("michi");

  myPetList("firulais");
  
  myPetList();

  //Playground: Closure para Almacenar Datos de Mascotas