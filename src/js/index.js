// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


//Crea una función que rellene un array con 15 números que no se repitan

let randomNumbers =[]
let number;

const fillArray = () =>{
    while (!randomNumbers.includes(number) && randomNumbers.length < 15){
        const number = Math.floor(Math.random()*20)
        randomNumbers.push(number)
    }
    //console.log(randomNumbers.length)
    console.log(randomNumbers)
}

fillArray()